import { Body, Controller, Post } from '@nestjs/common';
import { UsersAdminService } from '../services/users.admin.service';
import { CreateUserDto } from '../dtos/req/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersAdminSrv: UsersAdminService) {}

  @Post('create-user')
  createUser(@Body() body: CreateUserDto) {}

  @Post('create-many-users')
  createManyUsers() {}

  @Post('modify-user')
  modifyUser() {}

  @Post('modify-many-user')
  modifyManyUsers() {}

  @Post('modify-admin-user')
  modifyAdminUser() {}

  @Post('fetch-users')
  fetchUsers() {}

  @Post('remove-users')
  removeUsers() {}
}
