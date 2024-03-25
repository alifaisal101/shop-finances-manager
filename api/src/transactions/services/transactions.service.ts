import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Transaction,
  TransactionDocument,
} from '../entities/transactions.entity';
import { Model, Types } from 'mongoose';
import { warnLog } from 'src/utils/functions/log';
import { BudgetsService } from 'src/budgets/services/budgets.service';
import { TransactionDto } from '../dtos/transaction.dto';
import { AddTransactionDto } from '../dtos/add-transaction.dto';
import { ModifyTransactionDto } from '../dtos/modify-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
    private budgetsSrv: BudgetsService,
  ) {}

  async findAll(date: Date) {
    try {
      return await this.transactionModel.find({ transactionDate: date });
    } catch (err) {
      warnLog(err);
      throw new InternalServerErrorException(
        err,
        'Failed to fetch transactions from database.',
      );
    }
  }

  // async addManyTransactions(transactions: AddTransactionDto[]) {
  //   try {

  //   } catch {

  //   }

  //   try {
  //     const reevaluatedBudget = await this.budgetsSrv.reevaluateBudget(transaction.date);
  //   }  catch (err) {
  //     // Undo transaction changes
  //     throw new InternalServerErrorException(err ,"Failed to reevaluate budget.");
  //   }
  // }

  async addOneTransaction(transaction: AddTransactionDto) {
    try {
      const transactionResult = await this.transactionModel.create({
        ...transaction,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      try {
        const reevaluatedBudget = await this.budgetsSrv.reevaluateBudget(
          transaction.transactionDate,
        );

        return { reevaluatedBudget, transactionResult };
      } catch (err) {
        // Undo transaction changes
        throw new InternalServerErrorException(
          err,
          'Failed to reevaluate budget.',
        );
      }
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to add new transaction.',
      );
    }
  }

  async modifyTransaction(newTransaction: ModifyTransactionDto) {}

  private async deleteMany(transactionsIds: Types.ObjectId[]) {
    try {
      return await this.transactionModel.deleteMany({
        _id: { $in: transactionsIds },
      });
    } catch (err) {
      throw new InternalServerErrorException('Failed to delete transactions.');
    }
  }
}
