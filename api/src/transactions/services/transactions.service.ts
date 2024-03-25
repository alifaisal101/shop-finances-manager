import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Transaction,
  TransactionDocument,
} from '../entities/transactions.entity';
import { Model } from 'mongoose';
import { warnLog } from 'src/utils/functions/log';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
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
}
