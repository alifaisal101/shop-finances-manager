import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  OtherSpending,
  OtherSpendingDocument,
} from '../entities/other-spendings.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostOtherSpendingDto } from '../dtos/post-other-spendings.dto';
import { PatchOtherSpendingDto } from '../dtos/patch-other-spendings.dto';
import { TransactionsService } from 'src/transactions/services/transactions.service';

@Injectable()
export class OtherSpendingsService {
  constructor(
    @InjectModel(OtherSpending.name)
    private otherSpendingModel: Model<OtherSpendingDocument>,
    private transactionsSrv: TransactionsService,
  ) {}

  async findAll(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      return await this.otherSpendingModel
        .find()
        .skip(skip)
        .limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to fetch other spending records.',
      );
    }
  }

  private async create(otherSpending: OtherSpending) {
    try {
      return await this.otherSpendingModel.create(otherSpending);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create a other spending document.',
      );
    }
  }

  private async update(newOtherSpending: PatchOtherSpendingDto) {
    const otherSpendingId = newOtherSpending.otherSpendingId;
    delete newOtherSpending.otherSpendingId;

    try {
      return await this.otherSpendingModel.findByIdAndUpdate(
        otherSpendingId,
        newOtherSpending,
      );
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to store other spending document.',
      );
    }
  }

  private async delete(otherSpendingId: Types.ObjectId) {
    try {
      return await this.otherSpendingModel.findByIdAndDelete(otherSpendingId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete other spending document.',
      );
    }
  }

  async addSpending(otherSpending: PostOtherSpendingDto) {
    const spendingTransactions = otherSpending.transactions.map(
      (transaction) => {
        return { ...transaction, section: 'otherSpending', type: 'expense' };
      },
    );
    delete otherSpending.transactions;

    const addTransactionResults =
      await this.transactionsSrv.addTransactions(spendingTransactions);

    const spending = await this.create({
      ...otherSpending,
      transactions: addTransactionResults.transactionsResult.map((t) => t._id),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return { spending, spendingTransactions };
  }

  async modifySpending() {}

  async removeSpending(
    spendingId: Types.ObjectId,
    deleteAllRelatedTransactions: boolean,
  ) {
    try {
      const otherSpending = await this.otherSpendingModel.findById(spendingId);

      if (deleteAllRelatedTransactions) {
        this.transactionsSrv.removeTransactions(otherSpending.transactions);
      }

      return await this.delete(otherSpending._id);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to find otherSpending.',
      );
    }
  }
}
