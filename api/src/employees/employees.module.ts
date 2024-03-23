import { Module } from '@nestjs/common';
import { EmployeesService } from './services/employees.service';
import { EmployeesController } from './controllers/employees.controller';

@Module({
  providers: [EmployeesService],
  controllers: [EmployeesController]
})
export class EmployeesModule {}
