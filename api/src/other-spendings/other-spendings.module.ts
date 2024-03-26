import { Module } from '@nestjs/common';
import { OtherSpendingsController } from './controllers/other-spendings.controller';
import { OtherSpendingsService } from './services/other-spendings.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  OtherSpending,
  OtherSpendingSchema,
} from './entities/other-spendings.entity';
import { TransactionsModule } from 'src/transactions/transactions.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OtherSpending.name, schema: OtherSpendingSchema },
    ]),
    TransactionsModule,
  ],
  controllers: [OtherSpendingsController],
  providers: [OtherSpendingsService],
})
export class OtherSpendingsModule {}
