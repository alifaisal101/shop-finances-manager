import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Key, KeyDocument } from '../entities/keys.entity';
import { FilterQuery, Model, Types } from 'mongoose';
import { internalErrorExceptionCatch } from 'src/utils/functions/error';

@Injectable()
export class KeysService {
  constructor(@InjectModel(Key.name) private keyModel: Model<KeyDocument>) {}

  async create(keyObj: Key) {
    try {
      return await this.keyModel.create(keyObj);
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  async updateOne(filterObj: FilterQuery<Key>, keyObj: Partial<Key>) {
    try {
      return await this.keyModel.updateOne(filterObj, keyObj);
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  async findByName(name: string) {
    try {
      return await this.keyModel.findOne({ name });
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  async findById(id: Types.ObjectId) {
    try {
      return await this.keyModel.findById(id);
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  async remove(filterObj: FilterQuery<Key>) {
    try {
      return await this.keyModel.deleteOne(filterObj);
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }
}
