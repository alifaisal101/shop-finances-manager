import { Module } from '@nestjs/common';
import { ChartsController } from './controllers/charts.controller';
import { ChartsService } from './services/charts.service';

@Module({
  controllers: [ChartsController],
  providers: [ChartsService]
})
export class ChartsModule {}
