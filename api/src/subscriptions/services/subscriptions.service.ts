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

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(Subscription.name)
    private subscriptionModel: Model<SubscriptionDocument>,
  ) {}

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
}
