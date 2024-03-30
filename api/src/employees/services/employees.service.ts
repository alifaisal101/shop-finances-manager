import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from '../entities/employees.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostEmployeeDto } from '../dtos/post-employee.dto';
import { PatchEmployeeDto } from '../dtos/patch-employee.dto';
import { TransactionsService } from 'src/transactions/services/transactions.service';
import { AddTransactionDto } from 'src/transactions/dtos/add-transaction.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
    private transactionsSrv: TransactionsService,
  ) {}

  async findById(employeeId: Types.ObjectId) {
    try {
      return await this.employeeModel.findById(employeeId);
    } catch (err) {
      throw new InternalServerErrorException(
        'Failed to fetch employee from database.',
      );
    }
  }

  async findAll(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      return await this.employeeModel.find().skip(skip).limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to fetch employees.');
    }
  }

  async create(employee: PostEmployeeDto) {
    try {
      return await this.employeeModel.create({
        ...employee,
        createdAt: new Date(),
      });
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
      return await this.employeeModel.findByIdAndUpdate(employeeId, {
        ...newEmployee,
        updatedAt: new Date(),
      });
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to update the employee.',
      );
    }
  }

  async delete(employeeId: Types.ObjectId) {
    try {
      return await this.employeeModel.findByIdAndDelete(employeeId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete the employee.',
      );
    }
  }

  async checkSalaryPaymentStatus(employeeId: Types.ObjectId) {
    const employee = await this.employeeModel.findById(employeeId);

    if (!employee) {
      const notFoundErr = new Error(
        'Failed to find employee id, while trying to check payment status.',
      );
      throw new InternalServerErrorException(notFoundErr);
    }

    const latestEmployeeTransaction = await this.transactionsSrv.findAll([
      {
        $match: {
          _id: { $in: employee.transactions },
        },
      },
      {
        $sort: { transactionDate: -1 },
      },
      { $limit: 1 },
    ]);

    if (latestEmployeeTransaction.length == 0) {
      return false;
    }

    const currentDate = new Date();
    const dateDifference =
      (currentDate.getTime() -
        latestEmployeeTransaction[0].transactionDate.getTime()) /
      (1000 * 60 * 60 * 24);

    switch (employee.paymentPeriod) {
      case 'daily':
        if (dateDifference >= 1) {
          return false;
        }
        break;
      case 'weekly':
        if (dateDifference >= 7) {
          return false;
        }
        break;
      case 'monthly':
        if (dateDifference >= 30) {
          return false;
        }
        break;
      case 'yearly':
        if (dateDifference >= 365) {
          return false;
        }
        break;
    }

    return true;
  }

  async paySalary(employeeId: Types.ObjectId) {
    const employee = await this.employeeModel.findById(employeeId);

    if (!employee) {
      const notFoundErr = new Error(
        'Failed to find employee id, while trying to paySalary. This is unexpected behavior.',
      );
      throw new InternalServerErrorException(notFoundErr);
    }

    const transaction: AddTransactionDto = {
      amount: employee.salary,
      transactionDate: new Date(),
      section: 'employees',
      type: 'expense',
    };

    const addedTransactionId = (
      await this.transactionsSrv.addTransactions([transaction])
    ).transactionsResult[0]._id;

    employee.transactions.push(addedTransactionId);

    try {
      return await employee.save();
    } catch (err) {
      throw new InternalServerErrorException(
        'Failed to save employee to the database.',
      );
    }
  }
}
