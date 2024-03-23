import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { TransactionsModule } from './transactions/transactions.module';
import { PurchaseRecordsModule } from './purchase-records/purchase-records.module';
import { BudgetsModule } from './budgets/budgets.module';
import { ReturnedItemsModule } from './returned-items/returned-items.module';
import { OtherSpendingsModule } from './other-spendings/other-spendings.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    CompaniesModule,
    TransactionsModule,
    PurchaseRecordsModule,
    BudgetsModule,
    ReturnedItemsModule,
    OtherSpendingsModule,
    SubscriptionsModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
