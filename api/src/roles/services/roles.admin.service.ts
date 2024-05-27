import { Injectable } from '@nestjs/common';
import { RolesService } from './roles.service';
import { FetchRolesDto } from '../dtos/req/fetch-roles.dto';
import { RemoveRolesDto } from '../dtos/req/remove-roles.dto';
import { UsersService } from 'src/users/services/users.service';
import { badRequestExceptionCatch } from 'src/utils/functions/error';
import { CreateRolesDto, RoleDto } from '../dtos/req/create-roles.dto';
import { UpdateRolesDto } from '../dtos/req/update-roles.dto';
import { Role } from '../entities/roles.entity';

@Injectable()
export class RolesAdminService {
  constructor(
    private rolesSrv: RolesService,
    private usersSrv: UsersService,
  ) {}

  async createRoles(body: CreateRolesDto) {
    const roles: Role[] = [];
    for (let i = 0; i < body.roles.length; i++) {
      const role: Partial<Role> & RoleDto = body.roles[i];

      try {
        const notUniqueRoleName = (await this.findRoleName(role.role)) || false;
        if (notUniqueRoleName) {
          throw new Error('Role name already exists.');
        }
      } catch (err) {
        throw badRequestExceptionCatch(err);
      }
      role.createdAt = new Date();
      role.updatedAt = new Date();
      roles.push(role as Role);
    }
    return await this.rolesSrv.createMany(roles);
  }

  async updateRoles(body: UpdateRolesDto) {
    const roles: Role[] = [];
    for (let i = 0; i < body.roles.length; i++) {
      const role: Partial<Role> & RoleDto = body.roles[i];

      try {
        const notUniqueRoleName = (await this.findRoleName(role.role)) || false;
        if (notUniqueRoleName) {
          throw new Error('Role name already exists.');
        }
      } catch (err) {
        throw badRequestExceptionCatch(err);
      }
      role.updatedAt = new Date();
      roles.push(role as Role);
    }
    return await this.rolesSrv.updateMany(roles);
  }

  async fetchRoles(body: FetchRolesDto) {
    const skip = ((body.page | 1) - 1) * (body.recordsPerPage | 5);
    const limit = body.recordsPerPage | 5;

    let filterObj = {};
    if (body.searchQuery) {
      // @ts-ignore
      filterObj = filterQueryBuilder(body.searchQuery);
    }

    return await this.rolesSrv.find(
      filterObj,
      {},
      body.includeUsers,
      skip,
      limit,
      body.all,
    );
  }

  async removeRoles(body: RemoveRolesDto) {
    try {
      const users = await this.usersSrv.find(
        { roleId: { $in: body.rolesIds } },
        { _id: 1, username: 1 },
        false,
        0,
        0,
        true,
      );
      if (users.length > 0) {
        throw new Error(
          "Can't delete a role, if there are users attached to it.",
        );
      }

      return await this.rolesSrv.removeMany(body.rolesIds);
    } catch (err) {
      throw badRequestExceptionCatch(err);
    }
  }

  async findRoleName(role: string) {
    return await this.rolesSrv.find({ role }, { _id: 1 }, false, 0, 1, false);
  }
}
