import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Budget, BudgetDocument } from '../entites/budget.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectModel(Budget.name) private budgetModel: Model<BudgetDocument>,
  ) {}

  async fetchBudgets(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      return await this.budgetModel.find().skip(skip).limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to fetch budgets.');
    }
  }

  async deleteBudget(budgetId: Types.ObjectId) {
    try {
      return await this.budgetModel.findByIdAndDelete(budgetId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete the budget.',
      );
    }
  }
}
