import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Earning, EarningDocument } from '../entities/earnings.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostEarningsDto } from '../dtos/req/post-earnings.dto';
import { PatchEarningsDto } from '../dtos/req/patch-earnings.dto';

@Injectable()
export class EarningsService {
  constructor(
    @InjectModel(Earning.name) private earningModel: Model<EarningDocument>,
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

  async create(earning: PostEarningsDto) {
    try {
      return await this.earningModel.create(earning);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create a earning.',
      );
    }
  }

  async update(newEarning: PatchEarningsDto) {
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

  async delete(earningId: Types.ObjectId) {
    try {
      return await this.earningModel.findByIdAndDelete(earningId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete the earning.',
      );
    }
  }
}
