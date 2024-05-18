import { Module } from '@nestjs/common';
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';
import { RolesAdminService } from './services/roles.admin.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [RolesController],
  providers: [RolesService, RolesAdminService],
  imports: [UsersModule],
})
export class RolesModule {}
