import { Body, Controller, Post } from '@nestjs/common';
import { UsersAdminService } from '../services/users.admin.service';
import { CreateUserDto, RegisterUsersDto } from '../dtos/req/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersAdminSrv: UsersAdminService) {}

  @Post('create')
  async create(@Body() body: RegisterUsersDto) {
    return await this.usersAdminSrv.registerUsers(body);
  }

  @Post('modify')
  modify() {}

  @Post('modify-admin')
  modifyAdminUser() {}

  @Post('fetch')
  fetchUsers() {}

  @Post('remove')
  removeUsers() {}
}
