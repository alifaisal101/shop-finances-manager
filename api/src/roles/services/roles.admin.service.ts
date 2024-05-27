import { Injectable } from '@nestjs/common';
import { RolesService } from './roles.service';
import { FetchRolesDto } from '../dtos/req/fetch-roles.dto';

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
    );
  }
}
