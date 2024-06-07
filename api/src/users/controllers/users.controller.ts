import { Body, Controller, Post } from '@nestjs/common';
import { UsersAdminService } from '../services/users.admin.service';
import { CreateUserDto, RegisterUsersDto } from '../dtos/req/create-user.dto';
import { UpdateUsersDto } from '../dtos/req/update-user.dto';
import { FetchUsersDto } from '../dtos/req/fetch-users.dto';
import { RemoveUsersDto } from '../dtos/req/remove-users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersAdminSrv: UsersAdminService) {}

  @Post('create')
  async create(@Body() body: RegisterUsersDto) {
    return await this.usersAdminSrv.registerUsers(body);
  }

  @Post('update')
  async update(@Body() body: UpdateUsersDto) {
    return await this.usersAdminSrv.updateUsers(body);
  }

  @Post('fetch')
  async fetch(@Body() body: FetchUsersDto) {
    return await this.usersAdminSrv.fetchUsers(body);
  }

  @Post('remove')
  async removeUsers(@Body() body: RemoveUsersDto) {
    return await this.usersAdminSrv.removeUsers(body);
  }
}
