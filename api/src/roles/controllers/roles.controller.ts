import { Body, Controller, Post } from '@nestjs/common';
import { RolesAdminService } from '../services/roles.admin.service';
import { FetchRolesDto } from '../dtos/req/fetch-roles.dto';
import { CreateRolesDto } from '../dtos/req/create-roles.dto';

@Controller('roles')
export class RolesController {
  constructor(private rolesAdminSrv: RolesAdminService) {}

  @Post('create')
  async create(@Body() body: CreateRolesDto) {}

  @Post('update')
  async update(@Body() body) {}

  @Post('fetch')
  async fetchRoles(@Body() body: FetchRolesDto) {
    return await this.rolesAdminSrv.fetchRoles(body);
  }
}
