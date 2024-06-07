import { Controller, OnApplicationBootstrap } from '@nestjs/common';
import { InitializerService } from './services/initializer.service';

@Controller('initializer')
export class InitializerController implements OnApplicationBootstrap {
  constructor(private readonly initSrv: InitializerService) {}

  async onApplicationBootstrap() {
    this.initSrv.bootstrap();
  }
}
