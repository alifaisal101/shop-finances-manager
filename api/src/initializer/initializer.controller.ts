import { Controller } from '@nestjs/common';
import { InitializerService } from './services/initializer.service';

@Controller('initializer')
export class InitializerController {
  constructor(private readonly initSrv: InitializerService) {
    initSrv.bootstrap();
  }
}
