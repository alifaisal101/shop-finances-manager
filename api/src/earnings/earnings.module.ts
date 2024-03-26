import { Module } from '@nestjs/common';
import { EarningsController } from './controllers/earnings.controller';
import { EarningsService } from './services/earnings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Earning, EarningSchema } from './entities/earnings.entity';
import { TransactionsModule } from 'src/transactions/transactions.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Earning.name, schema: EarningSchema }]),
    TransactionsModule,
  ],
  controllers: [EarningsController],
  providers: [EarningsService],
})
export class EarningsModule {}
