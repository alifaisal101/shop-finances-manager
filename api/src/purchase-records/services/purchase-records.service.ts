import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  PurchaseRecord,
  PurchaseRecordDocument,
} from '../entities/purchase-records.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostPurchaseRecord } from '../dtos/req/post-purchase-record.dto';
import { PatchPurchaseRecord } from '../dtos/req/patch-purchase-record.dto';

@Injectable()
export class PurchaseRecordsService {
  constructor(
    @InjectModel(PurchaseRecord.name)
    private purchaseRecordModel: Model<PurchaseRecordDocument>,
  ) {}

  async findAll(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      return await this.purchaseRecordModel
        .find()
        .skip(skip)
        .limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to fetch purchase records.',
      );
    }
  }

  async create(purchaseRecord: PostPurchaseRecord) {
    try {
      return await this.purchaseRecordModel.create(purchaseRecord);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create a purchase record.',
      );
    }
  }

  async update(newPurchaseRecord: PatchPurchaseRecord) {
    const purchaseRecordId = newPurchaseRecord.purchaseRecordId;
    delete newPurchaseRecord.purchaseRecordId;

    try {
      return await this.purchaseRecordModel.findByIdAndUpdate(
        purchaseRecordId,
        newPurchaseRecord,
      );
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to update the purchase record.',
      );
    }
  }

  async delete(purchaseRecordId: Types.ObjectId) {
    try {
      return await this.purchaseRecordModel.findByIdAndDelete(purchaseRecordId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete the purchase record.',
      );
    }
  }
}
