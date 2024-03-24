import { Module } from '@nestjs/common';
import { EmployeesService } from './services/employees.service';
import { EmployeesController } from './controllers/employees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './entities/employees.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
  ],
  providers: [EmployeesService],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
