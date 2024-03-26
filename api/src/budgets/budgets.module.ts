import { Module } from '@nestjs/common';
import { BudgetsController } from './controllers/budgets.controller';
import { BudgetsService } from './services/budgets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Budget, BudgetSchema } from './entities/budget.entity';
import { TransactionsModule } from 'src/transactions/transactions.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Budget.name, schema: BudgetSchema }]),
    TransactionsModule,
  ],
  controllers: [BudgetsController],
  providers: [BudgetsService],
  exports: [BudgetsService],
})
export class BudgetsModule {}
