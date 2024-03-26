import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Earning, EarningDocument } from '../entities/earnings.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostEarningsDto } from '../dtos/req/post-earnings.dto';
import { PatchEarningsDto } from '../dtos/req/patch-earnings.dto';
import { TransactionsService } from 'src/transactions/services/transactions.service';

@Injectable()
export class EarningsService {
  constructor(
    @InjectModel(Earning.name) private earningModel: Model<EarningDocument>,
    private transactionsSrv: TransactionsService,
  ) {}

  async findAll(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      return await this.earningModel.find().skip(skip).limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to fetch earnings.');
    }
  }

  private async create(earning: Earning) {
    try {
      return await this.earningModel.create(earning);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create a earning.',
      );
    }
  }

  private async update(newEarning: PatchEarningsDto) {
    const earingId = newEarning.earningId;
    delete newEarning.earningId;

    try {
      return await this.earningModel.findByIdAndUpdate(earingId, newEarning);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to update the earning.',
      );
    }
  }

  private async delete(earningId: Types.ObjectId) {
    try {
      return await this.earningModel.findByIdAndDelete(earningId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete the earning.',
      );
    }
  }

  async addEarning(earning: PostEarningsDto) {
    const earningTransactions = earning.transactions.map((transaction) => {
      return {
        ...transaction,
        section: 'earnings',
        type: 'income',
      };
    });

    const addTransactionResults =
      await this.transactionsSrv.addTransactions(earningTransactions);
    delete earning.transactions;

    const earningResult = await this.create({
      ...earning,
      transactions: addTransactionResults.transactionsResult.map((t) => t._id),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return { earningResult, addTransactionResults };
  }

  async removeEarning(
    earningId: Types.ObjectId,
    deleteAllRelatedTransactions: boolean,
  ) {
    try {
      const earning = await this.earningModel.findById(earningId);

      if (deleteAllRelatedTransactions) {
        this.transactionsSrv.removeTransactions(earning.transactions);
      }

      return await this.delete(earning._id);
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to find earning.');
    }
  }
}
