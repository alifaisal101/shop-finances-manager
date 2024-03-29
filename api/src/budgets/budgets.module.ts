import { Module, forwardRef } from '@nestjs/common';
import { BudgetsController } from './controllers/budgets.controller';
import { BudgetsService } from './services/budgets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Budget, BudgetSchema } from './entities/budget.entity';
import { TransactionsModule } from 'src/transactions/transactions.module';
import {
  Transaction,
  TransactionSchema,
} from 'src/transactions/entities/transactions.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Budget.name, schema: BudgetSchema }]),
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  controllers: [BudgetsController],
  providers: [BudgetsService],
  exports: [BudgetsService],
})
export class BudgetsModule {}
