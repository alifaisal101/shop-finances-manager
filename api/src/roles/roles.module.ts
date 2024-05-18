import { Module, forwardRef } from '@nestjs/common';
import { RolesController } from './controllers/roles.controller';
import { RolesService } from './services/roles.service';
import { RolesAdminService } from './services/roles.admin.service';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Role, RoleSchema } from './entities/roles.entity';

@Module({
  controllers: [RolesController],
  providers: [RolesService, RolesAdminService],
  imports: [
    forwardRef(() => UsersModule),
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
  exports: [RolesService],
})
export class RolesModule {}
