import { Module, ValidationPipe } from '@nestjs/common';
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
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_URI } from './config';
import { APP_PIPE } from '@nestjs/core';
import { ChartsModule } from './charts/charts.module';
import { EarningsModule } from './earnings/earnings.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI),
    CompaniesModule,
    TransactionsModule,
    PurchaseRecordsModule,
    BudgetsModule,
    ReturnedItemsModule,
    OtherSpendingsModule,
    SubscriptionsModule,
    EmployeesModule,
    ChartsModule,
    EarningsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
