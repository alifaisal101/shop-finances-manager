import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Budget, BudgetDocument } from '../entities/budget.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { CreateBudgetDto } from '../dtos/create-budget.dto';
import { UpdateBudgetDto } from '../dtos/update-budget.dto';
import { TransactionsService } from 'src/transactions/services/transactions.service';
import {
  Transaction,
  TransactionDocument,
} from 'src/transactions/entities/transactions.entity';
import { BudgetValues } from '../dtos/budget-values.dto';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectModel(Budget.name) private budgetModel: Model<BudgetDocument>,
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  // Calculates budgets current amount, total income, and total expense
  calculateBudgetsValues(transactions: TransactionDocument[]): BudgetValues {
    let totalIncome = 0;
    let totalExpense = 0;

    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      if (transaction.type == 'income') {
        totalIncome += transaction.amount;
      } else if (transaction.type == 'expense') {
        totalExpense += transaction.amount;
      }
    }
    let currentAmount = totalIncome - totalExpense;
    return { currentAmount, totalIncome, totalExpense };
  }

  async reevaluateBudget(budgetDate: Date) {
    const transactions = await this.transactionModel.find({
      transactionDate: budgetDate,
    });
    const budgetValues = this.calculateBudgetsValues(transactions);

    const budget = (await this.budgetModel.findOne({ budgetDate })) || false;

    if (budget) {
      return this.update({ budgetId: budget._id, ...budgetValues });
    } else {
      return this.create({ ...budgetValues, budgetDate });
    }
  }

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

  private async create(budget: CreateBudgetDto) {
    try {
      return await this.budgetModel.create({
        ...budget,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to create budget.');
    }
  }

  private async update(newBudget: UpdateBudgetDto) {
    const budgetId = newBudget.budgetId;
    delete newBudget.budgetId;

    try {
      return await this.budgetModel.findByIdAndUpdate(budgetId, {
        ...newBudget,
        updatedAt: new Date(),
      });
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to update budget.');
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
