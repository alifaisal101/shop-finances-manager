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

@Injectable()
export class OtherSpendingsService {
  constructor(
    @InjectModel(OtherSpending.name)
    private otherSpendingModel: Model<OtherSpendingDocument>,
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

  async create(otherSpending: PostOtherSpendingDto) {
    try {
      return await this.otherSpendingModel.create(otherSpending);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create a other spending document.',
      );
    }
  }

  async update(newOtherSpending: PatchOtherSpendingDto) {
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

  async delete(otherSpendingId: Types.ObjectId) {
    try {
      return await this.otherSpendingModel.findByIdAndDelete(otherSpendingId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete other spending document.',
      );
    }
  }
}
