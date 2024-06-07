import { Injectable } from '@nestjs/common';

import { YEStoProceed, yToContinuePrompt } from 'src/utils/functions/prompt';
import { errorLog, successLog, warnLog } from 'src/utils/functions/log';
import { systemError } from 'src/utils/functions/error';
import { RolesService } from 'src/roles/services/roles.service';
import { predefinedRoles } from 'src/config';
import { Role } from 'src/roles/entities/roles.entity';
import { UsersService } from 'src/users/services/users.service';
import { Types } from 'mongoose';
import { KeysService } from 'src/keys/services/keys.service';
import { InAdminPromptData, PromptService } from './prompt.service';
import { hashSync } from 'bcryptjs';

@Injectable()
export class InitializerService {
  constructor(
    private readonly rolesSrv: RolesService,
    private readonly usersSrv: UsersService,
    private readonly keysSrv: KeysService,
    private readonly promptSrv: PromptService,
  ) {}
  async createRoles() {
    try {
      return await this.rolesSrv.createMany(
        predefinedRoles.roles.map((predefinedRole) => {
          return {
            ...predefinedRole,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
        }),
      );
    } catch (err) {
      systemError('Failed to create roles.', err);
    }
  }

  async createAdminUser(
    password: string,
    roleId: Types.ObjectId,
    fullName: string,
  ) {
    try {
      return await this.usersSrv.create({
        username: 'admin',
        password,
        roleId,
        fullName,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } catch (err) {
      systemError('Failed to create admin user.', err);
    }
  }

  async setInitializedKey() {
    try {
      return await this.keysSrv.create({
        name: 'initializationKey',
        value: true,
      });
    } catch (err) {
      systemError("Failed to set initialized key's value", err);
    }
  }

  async initializationStatus() {
    // Checks and validates whether the default data and the preset data are available in the database.
    const statusObj = {
      adminUser: {
        exists: false,
        value: null,
      },
      roles: {
        exists: false,
        value: null,
      },
      adminRole: {
        exists: false,
        value: null,
      },
      initializationKey: {
        exists: false,
        value: null,
      },
      initStatus: 'none',
    };
    // Fetches roles, admin-user, and initialization key.
    try {
      // Fetch admin user
      const adminUser = (
        await this.usersSrv.find({ username: 'admin' }, {}, true, 0, 1, false)
      )[0];

      statusObj.adminUser.exists = adminUser ? true : false;
      statusObj.adminUser.value = adminUser;

      // fetch admin role
      const adminRole = (
        await this.rolesSrv.find({ role: 'admin' }, {}, false, 0, 1, false)
      )[0];

      statusObj.adminRole.exists = adminRole ? true : false;
      statusObj.adminRole.value = adminRole;

      // Fetch roles
      const roles = await this.rolesSrv.find({}, {}, false, 0, 0, true);

      statusObj.roles.exists = roles.length > 0;
      statusObj.roles.value = roles;

      // // Initialization key
      const initializationKey =
        await this.keysSrv.findByName('initializationKey');

      statusObj.initializationKey.exists = initializationKey ? true : false;
      statusObj.initializationKey.value = initializationKey;

      if (
        statusObj.adminRole.exists &&
        statusObj.adminUser.exists &&
        statusObj.initializationKey.exists &&
        statusObj.roles.exists
      ) {
        statusObj.initStatus = 'full';
      } else if (
        statusObj.adminRole.exists ||
        statusObj.adminUser.exists ||
        statusObj.initializationKey.exists ||
        statusObj.roles.exists
      ) {
        statusObj.initStatus = 'partial';
      }
      return statusObj;
    } catch (err) {
      systemError('Failed to check the initialization status. ', err);
    }
  }

  async initializationExecute(adminUser: InAdminPromptData) {
    try {
      // Create roles
      const rolesRes = await this.createRoles();

      // Fetching the newly created admin role
      const adminRole = (
        await this.rolesSrv.find(
          { role: 'admin' },
          { _id: 1 },
          false,
          0,
          1,
          false,
        )
      )[0];

      if (!adminRole) {
        throw new Error('Failed to initialize. Error while creating roles.');
      }

      // Creating admin user
      const adminUserRes = await this.createAdminUser(
        hashSync(adminUser.password, 12),
        adminRole[0]._id,
        adminUser.fullName,
      );
      const initializeKeyRes = await this.setInitializedKey();
      return { rolesRes, adminUserRes, initializeKeyRes };
    } catch (err) {
      systemError('Failed to execute initialization.', err);
    }
  }

  async bootstrap(): Promise<void> {
    // Checks the initialization status
    const initializationStatus = await this.initializationStatus();

    switch (initializationStatus.initStatus) {
      // Fully initialized
      case 'full':
        successLog(' ----- System is fully initialized. -----');
        break;
      // Partially initialized
      case 'partial':
        errorLog(
          'System is partially initialized. Something has gone wrong durning the initialization or the operation. Manual troubleshooting is required.',
        );
        if (
          yToContinuePrompt(
            'Would you like to see the initializationStatus object?',
          )
        ) {
          console.log(initializationStatus);
        }
        break;
      // Uninitialized
      case 'none':
        warnLog(
          'System is not initialized. The system must be initialized before its ready for production.',
        );

        if (
          yToContinuePrompt(
            'Would you like to see the initializationStatus object?',
          )
        ) {
          console.log(initializationStatus);
        }
        if (yToContinuePrompt('Would you like to initialize the system?')) {
          const adminPromptData = this.promptSrv.adminPromptData();
          await this.initializationExecute(adminPromptData);
          console.log(await this.initializationStatus());
        } else {
          systemError(
            'System will not start without being initialized first.',
            new Error(),
          );
        }
        break;
    }
  }
}
