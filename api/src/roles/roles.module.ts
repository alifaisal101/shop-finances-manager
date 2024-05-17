import { Module } from '@nestjs/common';
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';
import { RolesAdminService } from './services/roles.admin.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService, RolesAdminService],
})
export class RolesModule {}
