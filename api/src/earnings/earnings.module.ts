import { Module } from '@nestjs/common';
import { EarningsController } from './controllers/earnings.controller';
import { EarningsService } from './services/earnings.service';

@Module({
  controllers: [EarningsController],
  providers: [EarningsService]
})
export class EarningsModule {}
