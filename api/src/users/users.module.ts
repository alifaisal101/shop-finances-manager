import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UsersAdminService } from './services/users.admin.service';

@Module({
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService, UsersAdminService],
  exports: [UsersService],
})
export class UsersModule {}
