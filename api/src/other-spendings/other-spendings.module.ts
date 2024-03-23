import { Module } from '@nestjs/common';
import { OtherSpendingsController } from './controllers/other-spendings.controller';
import { OtherSpendingsService } from './services/other-spendings.service';

@Module({
  controllers: [OtherSpendingsController],
  providers: [OtherSpendingsService]
})
export class OtherSpendingsModule {}
