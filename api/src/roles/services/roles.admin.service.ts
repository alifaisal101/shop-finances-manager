import { Injectable } from '@nestjs/common';
import { RolesService } from './roles.service';
import { FetchRolesDto } from '../dtos/req/fetch-roles.dto';
import { RemoveRolesDto } from '../dtos/req/remove-roles.dto';
import { UsersService } from 'src/users/services/users.service';
import { badRequestExceptionCatch } from 'src/utils/functions/error';

@Injectable()
export class RolesAdminService {
  constructor(
    private rolesSrv: RolesService,
    private usersSrv: UsersService,
  ) {}

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
}
