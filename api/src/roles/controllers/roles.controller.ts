import { Body, Controller, Post } from '@nestjs/common';
import { RolesAdminService } from '../services/roles.admin.service';
import { FetchRolesDto } from '../dtos/req/fetch-roles.dto';

@Controller('roles')
export class RolesController {
  constructor(private rolesAdminSrv: RolesAdminService) {}

  @Post('fetch-roles')
  async fetchRoles(@Body() body: FetchRolesDto) {}
}
