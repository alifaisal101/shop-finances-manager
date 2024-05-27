import { Injectable } from '@nestjs/common';
import { RolesService } from './roles.service';
import { FetchRolesDto } from '../dtos/req/fetch-roles.dto';
import { RemoveRolesDto } from '../dtos/req/remove-roles.dto';

@Injectable()
export class RolesAdminService {
  constructor(private rolesSrv: RolesService) {}

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
    for (let i = 0; i < body.rolesIds.length; i++) {
      const roleId = body.rolesIds[i];
    }
  }
}
