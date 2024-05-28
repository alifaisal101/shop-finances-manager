import { Body, Controller, Post } from '@nestjs/common';
import { RolesAdminService } from '../services/roles.admin.service';
import { FetchRolesDto } from '../dtos/req/fetch-roles.dto';
import { CreateRolesDto } from '../dtos/req/create-roles.dto';
import { RemoveRolesDto } from '../dtos/req/remove-roles.dto';
import { UpdateRolesDto } from '../dtos/req/update-roles.dto';

@Controller('roles')
export class RolesController {
  constructor(private rolesAdminSrv: RolesAdminService) {}

  @Post('create')
  async create(@Body() body: CreateRolesDto) {
    return await this.rolesAdminSrv.createRoles(body);
  }

  @Post('update')
  async update(@Body() body: UpdateRolesDto) {
    return await this.rolesAdminSrv.updateRoles(body);
  }

  @Post('fetch')
  async fetch(@Body() body: FetchRolesDto) {
    return await this.rolesAdminSrv.fetchRoles(body);
  }

  @Post('remove')
  async remove(@Body() body: RemoveRolesDto) {
    return await this.rolesAdminSrv.removeRoles(body);
  }
}
