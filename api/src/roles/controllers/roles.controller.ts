import { Body, Controller, Post } from '@nestjs/common';
import { RolesAdminService } from '../services/roles.admin.service';
import { FetchRolesDto } from '../dtos/req/fetch-roles.dto';
import { CreateRolesDto } from '../dtos/req/create-roles.dto';
import { RemoveRolesDto } from '../dtos/req/remove-roles.dto';
import { UpdateRolesDto } from '../dtos/req/update-roles.dto';
import { IsAuthenticated } from 'src/guards/authentication.guard';
import { IsAuthorized } from 'src/guards/authorization.guard';
import { permissionsObj } from 'src/config';

const adminPanelPermissions = permissionsObj.mainFeatures.adminPanel;
const rolesPermissions = adminPanelPermissions.subFeatures.roles;
@IsAuthorized([adminPanelPermissions.access, rolesPermissions.access]) // 2nd
@IsAuthenticated() // 1st
@Controller('roles')
export class RolesController {
  constructor(private rolesAdminSrv: RolesAdminService) {}

  @IsAuthorized([rolesPermissions.create])
  @Post('create')
  async create(@Body() body: CreateRolesDto) {
    return await this.rolesAdminSrv.createRoles(body);
  }

  @IsAuthorized([rolesPermissions.modify])
  @Post('update')
  async update(@Body() body: UpdateRolesDto) {
    return await this.rolesAdminSrv.updateRoles(body);
  }

  @Post('fetch')
  async fetch(@Body() body: FetchRolesDto) {
    return await this.rolesAdminSrv.fetchRoles(body);
  }

  @IsAuthorized([rolesPermissions.delete])
  @Post('remove')
  async remove(@Body() body: RemoveRolesDto) {
    return await this.rolesAdminSrv.removeRoles(body);
  }
}
