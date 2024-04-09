import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/status')
  sendStatus() {
    return {
      statusCode: HttpStatus.OK,
      msg: 'API is functioning as expected.',
      status: true,
    };
  }
}
