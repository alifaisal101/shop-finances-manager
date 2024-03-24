import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  ReturnedItem,
  ReturnedItemDocument,
} from '../entities/returned-items.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostReturnedItemsDto } from '../dtos/req/post-returned-items.dto';
import { PatchReturnedItemsDto } from '../dtos/req/patch-returned-items.dto';

@Injectable()
export class ReturnedItemsService {
  constructor(
    @InjectModel(ReturnedItem.name)
    private returnedItemsModel: Model<ReturnedItemDocument>,
  ) {}

  async findAll(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      await this.returnedItemsModel.find().skip(skip).limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to fetch returned items.',
      );
    }
  }

  async create(returnedItems: PostReturnedItemsDto) {
    try {
      await this.returnedItemsModel.create(returnedItems);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create a returned items.',
      );
    }
  }

  async update(returnedItems: PatchReturnedItemsDto) {
    const returnedItemsId = returnedItems.returnedItemsId;
    delete returnedItems.returnedItemsId;

    try {
      await this.returnedItemsModel.findByIdAndUpdate(
        returnedItemsId,
        returnedItems,
      );
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to update the returned items.',
      );
    }
  }

  async delete(returnedItemsId: Types.ObjectId) {
    try {
      await this.returnedItemsModel.findByIdAndDelete(returnedItemsId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete the returned items.',
      );
    }
  }
}
