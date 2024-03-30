import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Transaction,
  TransactionDocument,
} from '../entities/transactions.entity';
import { Model, PipelineStage, Types } from 'mongoose';
import { warnLog } from 'src/utils/functions/log';
import { BudgetsService } from 'src/budgets/services/budgets.service';
import { AddTransactionDto } from '../dtos/add-transaction.dto';
import { ModifyTransactionDto } from '../dtos/modify-transaction.dto';
import { BudgetDocument } from 'src/budgets/entities/budget.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
    private budgetsSrv: BudgetsService,
  ) {}

  async findById(transactionId: Types.ObjectId) {
    try {
      return await this.transactionModel.findById(transactionId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to fetch transaction.',
      );
    }
  }

  async findAll(
    pipelineStage: PipelineStage[],
  ): Promise<TransactionDocument[] | []> {
    try {
      return await this.transactionModel.aggregate(pipelineStage);
    } catch (err) {
      warnLog(err);
      throw new InternalServerErrorException(
        err,
        'Failed to fetch transactions from database.',
      );
    }
  }

  async addTransactions(transactions: AddTransactionDto[]) {
    const currentDate = new Date();
    const transactionsWithDates = transactions.map((transaction) => {
      return { ...transaction, createdAt: currentDate, updatedAt: currentDate };
    });

    try {
      const transactionsResult = await this.transactionModel.insertMany(
        transactionsWithDates,
      );

      try {
        const reevaluatedBudgets: BudgetDocument[] = [];
        for (let i = 0; i < transactionsWithDates.length; i++) {
          const transaction = transactionsWithDates[i];
          const reevaluatedBudget = await this.budgetsSrv.reevaluateBudget(
            transaction.transactionDate,
          );

          reevaluatedBudgets.push(reevaluatedBudget);
        }

        return { reevaluatedBudgets, transactionsResult };
      } catch (err) {
        // Undo transactions changes
        await this.transactionModel.deleteMany({
          _id: { $in: transactionsResult.map((t) => t._id) },
        });

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

  async modifyTransaction(newTransaction: ModifyTransactionDto) {
    const transactionId = newTransaction.transactionId;
    delete newTransaction.transactionId;

    try {
      const transactionResult = await this.transactionModel.findByIdAndUpdate(
        transactionId,
        newTransaction,
      );

      try {
        const reevaluatedBudget = await this.budgetsSrv.reevaluateBudget(
          transactionResult.transactionDate,
        );

        return {
          reevaluatedBudget,
          transactionResult,
        };
      } catch (err) {
        throw new InternalServerErrorException(
          err,
          'Failed to reevaluate budget.',
        );
      }
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to modify transaction.',
      );
    }
  }

  async removeTransactions(transactionsIds: Types.ObjectId[]) {
    try {
      const transactions = await this.transactionModel.find(
        { _id: { $in: transactionsIds } },
        { transactionDate: 1 },
      );

      const deleteManyResult = await this.transactionModel.deleteMany({
        _id: { $in: transactionsIds },
      });

      try {
        const reevaluatedBudgets: BudgetDocument[] = [];
        for (let i = 0; i < transactions.length; i++) {
          const transaction = transactions[i];
          const reevaluatedBudget = await this.budgetsSrv.reevaluateBudget(
            transaction.transactionDate,
          );

          reevaluatedBudgets.push(reevaluatedBudget);
        }

        return { reevaluatedBudgets, deleteManyResult };
      } catch (err) {
        throw new InternalServerErrorException(
          err,
          'Failed to reevaluate budget.',
        );
      }
    } catch (err) {
      throw new InternalServerErrorException('Failed to delete transactions.');
    }
  }
}
