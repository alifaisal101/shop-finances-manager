import { Body, Controller, Post } from '@nestjs/common';
import { UsersAdminService } from '../services/users.admin.service';
import { CreateUserDto, RegisterUsersDto } from '../dtos/req/create-user.dto';
import { UpdateUsersDto } from '../dtos/req/update-user.dto';
import { FetchUsersDto } from '../dtos/req/fetch-users.dto';
import { RemoveUsersDto } from '../dtos/req/remove-users.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ExcludePasswordDto } from '../dtos/res/exclude-password.dto';
import { IsAuthenticated } from 'src/guards/authentication.guard';
import { IsAuthorized } from 'src/guards/authorization.guard';
import { permissionsObj } from 'src/config';

const adminPanelPermissions = permissionsObj.mainFeatures.adminPanel;
const usersPermissions = adminPanelPermissions.subFeatures.users;
@Serialize(ExcludePasswordDto)
@IsAuthorized([adminPanelPermissions.access, usersPermissions.access]) // 2nd
@IsAuthenticated() // 1st
@Controller('users')
export class UsersController {
  constructor(private usersAdminSrv: UsersAdminService) {}

  @IsAuthorized([usersPermissions.create])
  @Post('create')
  async create(@Body() body: RegisterUsersDto) {
    return await this.usersAdminSrv.registerUsers(body);
  }
  @IsAuthorized([usersPermissions.modify])
  @Post('update')
  async update(@Body() body: UpdateUsersDto) {
    return await this.usersAdminSrv.updateUsers(body);
  }

  @Post('fetch')
  async fetch(@Body() body: FetchUsersDto) {
    return await this.usersAdminSrv.fetchUsers(body);
  }

  @IsAuthorized([usersPermissions.delete])
  @Post('remove')
  async removeUsers(@Body() body: RemoveUsersDto) {
    return await this.usersAdminSrv.removeUsers(body);
  }
}
