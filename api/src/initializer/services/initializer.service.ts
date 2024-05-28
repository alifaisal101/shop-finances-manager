import { Injectable } from '@nestjs/common';

import { YEStoProceed, yToContinuePrompt } from 'src/utils/functions/prompt';
import { errorLog, successLog, warnLog } from 'src/utils/functions/log';
import { systemError } from 'src/utils/functions/error';
import { RolesService } from 'src/roles/services/roles.service';
import { predefinedRoles } from 'src/config';
import { Role } from 'src/roles/entities/roles.entity';
import { UsersService } from 'src/users/services/users.service';
import { Types } from 'mongoose';

@Injectable()
export class InitializerService {
  constructor(
    private readonly rolesSrv: RolesService,
    private readonly usersSrv: UsersService,
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

  // async checkInitializationStatus() {
  //   // Checks and validates whether the default data and the preset data are available in the database.
  //   // Checks the storage status
  //   try {
  //     // Initialization status
  //     const initSettingStatus: any = (await this.settingSrv.findOne(
  //       'init',
  //     )) || {
  //       initialized: false,
  //     };

  //     // Roles
  //     const mainrolesDocs = await this.mainrolesSrv.findAll();
  //     let mainrolesEnum = [...mainroles];
  //     let adminMainroleId: mongoose.Types.ObjectId;

  //     const mainrolesHealthObj = {
  //       mainrolesCount: mainrolesDocs?.length || 0,
  //       mainroles: [],
  //       valid: false,
  //     };

  //     // filling the mainroles in the mainrolesHealthObj. Obtaining the admin mainrole id
  //     for (let i = 0; i < mainrolesDocs.length; i++) {
  //       const mainrole = mainrolesDocs[i];
  //       mainrolesHealthObj.mainroles.push(mainrole.label);

  //       if (mainrole.label === 'admin') {
  //         adminMainroleId = mainrole._id;
  //       }
  //     }

  //     // Compares the mainroles's enum to the fetched data from the database.
  //     if (matchArrays(mainrolesHealthObj.mainroles, mainrolesEnum)) {
  //       mainrolesHealthObj.valid = true;
  //     }

  //     // Admin User
  //     const adminUser =
  //       (await this.usersSrv.findOne({ MainroleId: adminMainroleId })) || false;

  //     if (adminUser) {
  //       // @ts-ignore
  //       delete adminUser?._doc?.password;
  //     }
  //     // Storage Status
  //     const storageStatus = this.storageSrv.checkStorageInitalization();
  //     let storageOverallStatus: boolean = true;

  //     // All this does is, loop through all the properties in the storage status object, and at the first prop it finds to be false,
  //     // it breaks the scope, and sets the overall status to be false
  //     storageOverallStatus_Process: {
  //       let storageStatus_keys = Object.keys(storageStatus);
  //       for (let i = 0; i < storageStatus_keys.length; i++) {
  //         const storageObj = storageStatus[storageStatus_keys[i]];
  //         const storageObj_keys = Object.keys(storageObj);

  //         for (let y = 0; y < storageObj_keys.length; y++) {
  //           const prop = storageObj[storageObj_keys[y]];
  //           if (!prop) {
  //             storageOverallStatus = false;
  //             break storageOverallStatus_Process;
  //           }
  //         }
  //       }
  //     }

  //     // Process the init status
  //     let initStatus: 'full' | 'partial' | 'none' = 'none';

  //     if (
  //       mainrolesHealthObj &&
  //       initSettingStatus &&
  //       adminUser &&
  //       storageOverallStatus
  //     ) {
  //       initStatus = 'full';
  //     } else if (
  //       mainrolesHealthObj.valid ||
  //       initSettingStatus.initialized ||
  //       adminUser ||
  //       storageOverallStatus
  //     ) {
  //       initStatus = 'partial';
  //     }

  //     return {
  //       initSettingStatus,
  //       mainrolesEnum: mainroles,
  //       mainrolesHealthObj,
  //       adminUser,
  //       storageStatus,
  //       storageOverallStatus,
  //       initStatus,
  //     };
  //   } catch (err) {
  //     systemError('Failed to check initialization status.', err);
  //   }
  // }

  async initializationExecute() {}

  async bootstrap(): Promise<void> {
    // // Checks the initialization status
    // const initializationStatus = await this.checkInitializationStatus();
    // switch (initializationStatus.initStatus) {
    //   // Fully initialized
    //   case 'full':
    //     successLog('System is fully initialized');
    //     errorLog(
    //       'Warning: Re-initializing the system, may lead to overwriting data, and data loss!',
    //     );
    //     if (
    //       yToContinuePrompt(
    //         'Would you like to see the initializationStatus object? ',
    //       )
    //     ) {
    //       console.log(initializationStatus);
    //     }
    //     if (YEStoProceed('Would you like to Re-initialize the system ?')) {
    //       await this.initializationExecute(initializationStatus);
    //     }
    //     break;
    //   // Partially initialized
    //   case 'partial':
    //     errorLog(
    //       'System is partially initialized. Something has gone wrong durning the initialization.',
    //     );
    //     errorLog(
    //       'Warning: Re-initializing the system, may lead to overwriting data, and data loss!',
    //     );
    //     if (
    //       yToContinuePrompt(
    //         'Would you like to see the initializationStatus object ? ',
    //       )
    //     ) {
    //       console.log(initializationStatus);
    //     }
    //     if (YEStoProceed('Would you like to Re-initialize the system ?')) {
    //       await this.initializationExecute(initializationStatus);
    //     }
    //     break;
    //   // Uninitialized
    //   case 'none':
    //     warnLog(
    //       'System is not initialized. The system must be initialized before its ready for production.',
    //     );
    //     if (
    //       yToContinuePrompt(
    //         'Would you like to see the initializationStatus object ? ',
    //       )
    //     ) {
    //       console.log(initializationStatus);
    //     }
    //     if (yToContinuePrompt('Would you like to initialize the system ?')) {
    //       await this.initializationExecute(initializationStatus);
    //     } else {
    //       systemError(
    //         'System will not start without being initialized first.',
    //         new Error(),
    //       );
    //     }
    //     break;
    // }
  }
}
