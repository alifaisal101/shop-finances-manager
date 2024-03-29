import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  OtherSpending,
  OtherSpendingDocument,
} from '../entities/other-spendings.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostOtherSpendingDto } from '../dtos/req/post-other-spendings.dto';
import { PatchOtherSpendingDto } from '../dtos/req/patch-other-spendings.dto';
import { TransactionsService } from 'src/transactions/services/transactions.service';
import { CreateOtherSpendingDto } from '../dtos/create-other-spending.dto';

@Injectable()
export class OtherSpendingsService {
  constructor(
    @InjectModel(OtherSpending.name)
    private otherSpendingModel: Model<OtherSpendingDocument>,
    private transactionsSrv: TransactionsService,
  ) {}

  async findById(otherSpendingId: Types.ObjectId) {
    try {
      return await this.otherSpendingModel.findById(otherSpendingId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to find otherSpending.',
      );
    }
  }

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

  private async create(otherSpending: CreateOtherSpendingDto) {
    try {
      return await this.otherSpendingModel.create({
        ...otherSpending,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
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
      return await this.otherSpendingModel.findByIdAndUpdate(otherSpendingId, {
        ...newOtherSpending,
        updatedAt: new Date(),
      });
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
    let paidTo = 0;
    const spendingTransactions = otherSpending.transactions.map(
      (transaction) => {
        paidTo += transaction.amount;
        return { ...transaction, section: 'otherSpending', type: 'expense' };
      },
    );
    delete otherSpending.transactions;
    let debt = otherSpending.price - paidTo;

    const addTransactionResults =
      await this.transactionsSrv.addTransactions(spendingTransactions);

    const spending = await this.create({
      ...otherSpending,
      debt,
      paidTo,
      transactions: addTransactionResults.transactionsResult.map((t) => t._id),
    });

    return { spending, spendingTransactions };
  }

  async modifySpending(newOtherSpending: PatchOtherSpendingDto) {
    const otherSpending = await this.findById(newOtherSpending.otherSpendingId);
    if (otherSpending) {
      throw new NotFoundException('No otherSpending with that Id was found.');
    }

    let addedDebt = 0;
    let addedPaidTo = 0;

    // New Transactions
    if (newOtherSpending?.newTransactions?.length > 0) {
      const newOtherSpendingTransactions = newOtherSpending.newTransactions.map(
        (transaction) => {
          addedPaidTo += transaction.amount;
          return {
            ...transaction,
            section: 'otherSpending',
            type: 'expense',
          };
        },
      );

      const addTransactionResults = await this.transactionsSrv.addTransactions(
        newOtherSpendingTransactions,
      );
      const addedTransactionsIds = addTransactionResults.transactionsResult.map(
        (t) => t._id,
      );
      otherSpending.transactions.concat(addedTransactionsIds);
    }

    // Modified Transactions
    if (newOtherSpending?.modifiedTransactions?.length > 0) {
      const modifiedTransactionsResult = [];

      for (let i = 0; i < newOtherSpending.modifiedTransactions.length; i++) {
        const modifiedTransaction = newOtherSpending.modifiedTransactions[i];
        const transactionDb = await this.transactionsSrv.findById(
          modifiedTransaction.transactionId,
        );
        addedPaidTo = modifiedTransaction.amount - transactionDb.amount;
        modifiedTransactionsResult.push(
          await this.transactionsSrv.modifyTransaction(modifiedTransaction),
        );
      }
    }

    // Removed Transactions
    if (newOtherSpending?.removedTransactions?.length > 0) {
      const removedTransactionsIds = [];

      for (let i = 0; i < newOtherSpending.removedTransactions.length; i++) {
        const transactionToRemoveId = newOtherSpending.removedTransactions[i];
        const transactionDb = await this.transactionsSrv.findById(
          transactionToRemoveId,
        );

        removedTransactionsIds.push(transactionToRemoveId);
        addedPaidTo -= transactionDb.amount;
      }
      const removedTransactionsResult =
        await this.transactionsSrv.removeTransactions(
          newOtherSpending.removedTransactions,
        );

      otherSpending.transactions = otherSpending.transactions.filter(
        (transactionId) => !removedTransactionsIds.includes(transactionId),
      );
    }

    if (newOtherSpending.price) {
      addedDebt = newOtherSpending.price - otherSpending.price;
      otherSpending.price = newOtherSpending.price;
    }

    if (newOtherSpending.title) {
      otherSpending.title = newOtherSpending.title;
    }

    if (newOtherSpending.paymentType) {
      otherSpending.paymentType = newOtherSpending.paymentType;
    }

    if (newOtherSpending.spendingDate) {
      otherSpending.spendingDate = newOtherSpending.spendingDate;
    }

    otherSpending.debt += addedDebt;
    otherSpending.paidTo += addedPaidTo;
    otherSpending.updatedAt = new Date();

    try {
      return await otherSpending.save();
    } catch (err) {
      throw new Error('Failed to modify otherSpending.');
    }
  }

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
