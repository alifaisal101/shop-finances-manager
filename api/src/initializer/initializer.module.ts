import { Module } from '@nestjs/common';
import { InitializerController } from './initializer.controller';
import { InitializerService } from './services/initializer.service';
import { PromptService } from './services/prompt.service';
import { RolesModule } from 'src/roles/roles.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [InitializerController],
  providers: [InitializerService, PromptService],
  imports: [RolesModule, UsersModule],
})
export class InitializerModule {}
