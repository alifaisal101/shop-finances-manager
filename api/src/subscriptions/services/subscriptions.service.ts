import { TransactionsService } from './../../transactions/services/transactions.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Subscription,
  SubscriptionDocument,
} from '../entities/subscriptions.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostSubscriptionDto } from '../dtos/post-subscription.dto';
import { PatchSubscriptionDto } from '../dtos/patch-subscription.dto';
import { AddTransactionDto } from 'src/transactions/dtos/add-transaction.dto';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(Subscription.name)
    private subscriptionModel: Model<SubscriptionDocument>,
    private transactionsSrv: TransactionsService,
  ) {}

  async findById(subscriptionId: Types.ObjectId) {
    try {
      return this.subscriptionModel.findById(subscriptionId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to fetch subscription from database.',
      );
    }
  }
  async findAll(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      return await this.subscriptionModel
        .find()
        .skip(skip)
        .limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to fetch subscriptions.',
      );
    }
  }

  async create(subscription: PostSubscriptionDto) {
    try {
      return await this.subscriptionModel.create(subscription);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create subscription',
      );
    }
  }

  async update(newSubscription: PatchSubscriptionDto) {
    const subscriptionId = newSubscription.subscriptionId;
    delete newSubscription.subscriptionId;

    try {
      return await this.subscriptionModel.findByIdAndUpdate(subscriptionId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to update subscription',
      );
    }
  }

  async delete(subscriptionId: Types.ObjectId) {
    try {
      return await this.subscriptionModel.findByIdAndDelete(subscriptionId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete subscription.',
      );
    }
  }

  async checkSubscriptionPaymentStatus(subscriptionId: Types.ObjectId) {
    const subscription = await this.findById(subscriptionId);
    if (!subscription) {
      const notFoundError = new Error(
        'Failed to find subscription, while trying to check subscription payment status.',
      );
      throw new InternalServerErrorException(notFoundError);
    }

    const latestSubscriptionTransaction = await this.transactionsSrv.findAll([
      {
        $match: {
          _id: { $in: subscription.transactions },
        },
      },
      {
        $sort: { transactionDate: -1 },
      },
      { $limit: 1 },
    ]);

    if (latestSubscriptionTransaction.length == 0) {
      return false;
    }

    const currentDate = new Date();
    const dateDifference =
      (currentDate.getTime() -
        latestSubscriptionTransaction[0].transactionDate.getTime()) /
      (1000 * 60 * 60 * 24);

    switch (subscription.paymentPeriod) {
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

  async paySubscription(subscriptionId: Types.ObjectId) {
    const subscription = await this.findById(subscriptionId);

    if (!subscription) {
      const notFoundErr = new Error(
        'Failed to find subscription id, while trying to paySalary. This is unexpected behavior.',
      );
      throw new InternalServerErrorException(notFoundErr);
    }

    const transaction: AddTransactionDto = {
      amount: subscription.amount,
      transactionDate: new Date(),
      section: 'subscriptions',
      type: 'expense',
    };

    const addedTransactionId = (
      await this.transactionsSrv.addTransactions([transaction])
    ).transactionsResult[0]._id;

    subscription.transactions.push(addedTransactionId);
    try {
      return await subscription.save();
    } catch (err) {
      throw new InternalServerErrorException(
        'Failed to save subscription to the database.',
      );
    }
  }
}
