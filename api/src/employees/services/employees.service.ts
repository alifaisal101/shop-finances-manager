import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from '../entities/employees.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostEmployeeDto } from '../dtos/post-employee.dto';
import { PatchEmployeeDto } from '../dtos/patch-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async findAll(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      await this.employeeModel.find().skip(skip).limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to fetch employees.');
    }
  }

  async create(employee: PostEmployeeDto) {
    try {
      await this.employeeModel.create(employee);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create a company.',
      );
    }
  }

  async update(newEmployee: PatchEmployeeDto) {
    const employeeId = newEmployee.employeeId;
    delete newEmployee.employeeId;

    try {
      await this.employeeModel.findByIdAndUpdate(employeeId, newEmployee);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to update the employee.',
      );
    }
  }

  async delete(employeeId: Types.ObjectId) {
    try {
      await this.employeeModel.findByIdAndDelete(employeeId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete the employee.',
      );
    }
  }
}
