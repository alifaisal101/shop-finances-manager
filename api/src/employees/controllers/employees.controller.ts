import { Types } from 'mongoose';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EmployeesService } from '../services/employees.service';
import { PostEmployeeDto } from '../dtos/post-employee.dto';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PatchEmployeeDto } from '../dtos/patch-employee.dto';
import { isMongoId } from 'class-validator';

@Controller('employees')
export class EmployeesController {
  constructor(private employeeSrv: EmployeesService) {}

  @Post('fetch-employees')
  async fetchEmployees(@Body() body: FetchRecordsDto) {
    return await this.employeeSrv.findAll(body);
  }

  @Post('add-employee')
  async addEmployee(@Body() body: PostEmployeeDto) {
    return await this.employeeSrv.create(body);
  }

  @Patch('update-employee')
  async updateEmployee(@Body() body: PatchEmployeeDto) {
    return await this.employeeSrv.update(body);
  }

  @Delete('delete-employee/:employeeId')
  async deleteEmployee(@Param('employeeId') employeeId: string) {
    try {
      if (!employeeId || !isMongoId(employeeId)) {
        throw new Error('Invalid EmployeeId');
      }
    } catch (err) {
      throw new BadRequestException(err);
    }

    return await this.employeeSrv.delete(new Types.ObjectId(employeeId));
  }
}
