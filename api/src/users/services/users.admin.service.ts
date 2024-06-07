import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, RegisterUsersDto } from '../dtos/req/create-user.dto';
import { RolesService } from 'src/roles/services/roles.service';
import { hashSync } from 'bcryptjs';
import { User } from '../entities/users.entity';
import {
  badRequestExceptionCatch,
  internalErrorExceptionCatch,
} from 'src/utils/functions/error';
import { UpdateUserDto, UpdateUsersDto } from '../dtos/req/update-user.dto';
import { FetchUsersDto } from '../dtos/req/fetch-users.dto';
import { filterQueryBuilder } from 'src/utils/functions/database';
import { Types } from 'mongoose';
import { RemoveUsersDto } from '../dtos/req/remove-users.dto';

@Injectable()
export class UsersAdminService {
  constructor(
    private usersSrv: UsersService,
    private rolesSrv: RolesService,
  ) {}

  async registerUsers(body: RegisterUsersDto) {
    const users: User[] = [];
    for (let i = 0; i < body.users.length; i++) {
      const user: Partial<User> & CreateUserDto = body.users[i];

      try {
        if (user.phoneNumber) {
          const notUniquePhoneNumber =
            (await this.findPhoneNumber(user.phoneNumber)).length || false;
          if (notUniquePhoneNumber) {
            throw new Error('Phone number already used.');
          }
        }

        const notUniqueUsername =
          (await this.findUsername(user.username))?.length || false;

        if (notUniqueUsername) {
          throw new Error('Username is already used.');
        }

        const role = (await this.rolesSrv.findById(user.roleId)) || false;
        if (!role) {
          throw new Error('Invalid role ID');
        }
      } catch (err) {
        throw badRequestExceptionCatch(err);
      }

      try {
        user.password = hashSync(user.password, 12);
      } catch (err) {
        throw internalErrorExceptionCatch(err);
      }
      user.createdAt = new Date();
      user.updatedAt = new Date();
      users.push(user as User);
    }
    return await this.usersSrv.createMany(users);
  }

  async updateUsers(body: UpdateUsersDto) {
    const users = [];
    for (let i = 0; i < body.users.length; i++) {
      const user: UpdateUserDto & Partial<User> = body.users[i];

      try {
        const userExists = (await this.usersSrv.findById(user._id)) || false;

        if (!userExists) {
          throw new Error('UserId not found');
        }
        if (user.phoneNumber) {
          const notUniquePhoneNumber =
            (await this.findPhoneNumber(user.phoneNumber)).length || false;
          if (notUniquePhoneNumber) {
            throw new Error('Phone number already used.');
          }
        }

        if (user.username) {
          const notUniqueUsername =
            (await this.findUsername(user.username))?.length || false;

          if (notUniqueUsername) {
            throw new Error('Username is already used.');
          }

          if (userExists.username == 'admin' || user?.username == 'admin') {
            throw new Error(
              "There must be one user that has the username 'admin'.",
            );
          }
        }

        if (user.roleId) {
          const role = (await this.rolesSrv.findById(user.roleId)) || false;
          if (!role) {
            throw new Error('Invalid role ID');
          }
        }
      } catch (err) {
        throw badRequestExceptionCatch(err);
      }

      if (user.password) {
        try {
          user.password = hashSync(user.password, 12);
        } catch (err) {
          throw internalErrorExceptionCatch(err);
        }
      }
      user.updatedAt = new Date();
      users.push(user);
    }
    return await this.usersSrv.updateMany(users);
  }

  async fetchUsers(body: FetchUsersDto) {
    const skip = ((body.page | 1) - 1) * (body.recordsPerPage | 5);
    const limit = body.recordsPerPage | 5;

    let filterObj = {};
    if (body.searchQuery) {
      // @ts-ignore
      filterObj = filterQueryBuilder(body.searchQuery);
    }

    return await this.usersSrv.find(
      filterObj,
      { password: false },
      body.includeRoles,
      skip,
      limit,
      body.all,
    );
  }

  async findUsername(username: string) {
    return await this.usersSrv.find(
      { username },
      { _id: 1 },
      false,
      0,
      1,
      false,
    );
  }

  async findPhoneNumber(phoneNumber: string) {
    return await this.usersSrv.find(
      { phoneNumber },
      { _id: 1 },
      false,
      0,
      1,
      false,
    );
  }

  async removeUsers(body: RemoveUsersDto) {
    try {
      const users = await this.usersSrv.find(
        { _id: { $in: body.usersIds } },
        { _id: 1, username: 1 },
        false,
        0,
        0,
        true,
      );

      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.username == 'admin') {
          throw new Error("Failed to delete. Can't delete admin user.");
        }
      }

      return this.usersSrv.removeMany(body.usersIds);
    } catch (err) {
      throw badRequestExceptionCatch(err);
    }
  }
}
