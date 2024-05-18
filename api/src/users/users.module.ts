import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UsersAdminService } from './services/users.admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/users.entity';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService, UsersAdminService],
  exports: [UsersService],
  imports: [
    forwardRef(() => RolesModule),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class UsersModule {}
