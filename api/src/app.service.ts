import { Injectable } from '@nestjs/common';
import { EmployeesService } from './employees/services/employees.service';
import { SubscriptionsService } from './subscriptions/services/subscriptions.service';
import * as cron from 'node-cron';

@Injectable()
export class AppService {
  constructor(
    private employeesSrv: EmployeesService,
    private subscriptionSrv: SubscriptionsService,
  ) {
    this.schedulePeriodicalPayments;
  }

  private schedulePeriodicalPayments() {
    cron.schedule('0 0 * * *', async () => {
      // Call your payment creation service method here
      await this.handlePeriodicalPayments();
    });
  }

  private async handlePeriodicalPayments() {
    const subscriptions = await this.subscriptionSrv.findAll({ all: true });
    const employees = await this.employeesSrv.findAll({ all: true });

    for (let i = 0; i < subscriptions.length; i++) {
      const subscription = subscriptions[i];
      const subscriptionPaymentStatus =
        await this.subscriptionSrv.checkSubscriptionPaymentStatus(subscription);

      if (!subscriptionPaymentStatus) {
        await this.subscriptionSrv.paySubscription(subscription);
      }
    }

    for (let i = 0; i < subscriptions.length; i++) {
      const employee = employees[i];
      const employeeSalaryPaymentStatus =
        await this.employeesSrv.checkSalaryPaymentStatus(employee);
      if (!employeeSalaryPaymentStatus) {
        await this.employeesSrv.paySalary(employee);
      }
    }
  }
}
