import { HttpException, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import {
  Connection,
  FilterQuery,
  Model,
  PipelineStage,
  ProjectionType,
  Types,
} from 'mongoose';
import { User, UserDocument } from '../entities/users.entity';
import { insertMany, updateManyRecords } from 'src/utils/functions/database';
import { internalErrorExceptionCatch } from 'src/utils/functions/error';
import { isNotEmptyObject } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  async create(user: User) {
    try {
      return await this.userModel.create(user);
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  async createMany(users: User[]) {
    try {
      return await insertMany(users, this.userModel);
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  private async updateOne(
    userId: Types.ObjectId,
    modifiedUser: Partial<User>,
  ) {}

  async updateMany(users: Partial<User>[]) {
    console.log(users);
    try {
      return await updateManyRecords(users, this.userModel);
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  async find(
    filterObj: FilterQuery<User>,
    projection: ProjectionType<User>,
    includeRoles: boolean,
    skip: number,
    limit: number,
    all: boolean,
  ) {
    try {
      const pipeline: PipelineStage[] = [
        {
          $match: filterObj, // Filter documents based on the filterObj
        },
      ];

      if (isNotEmptyObject(projection)) {
        pipeline.push({
          // @ts-ignore
          $project: projection, // Project only the specified fields
        });
      }
      if (!all) {
        pipeline.push(
          {
            $skip: skip, // Skip the specified number of documents
          },
          {
            $limit: limit, // Limit the number of documents returned
          },
        );
      }

      if (includeRoles)
        pipeline.push(
          {
            $lookup: {
              from: 'roles', // Name of the Roles collection
              localField: 'roleId', // Field in the Users collection
              foreignField: '_id', // Field in the Roles collection
              as: 'role', // Alias for the joined role object
            },
          },
          {
            $addFields: {
              role: { $arrayElemAt: ['$role', 0] },
            },
          },
        );

      return await this.userModel.aggregate(pipeline);
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  async findById(userId: Types.ObjectId) {
    try {
      return await this.userModel.findById(userId);
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  async removeMany(usersIds: Types.ObjectId[]) {
    try {
      return await this.userModel.deleteMany({ _id: { $in: usersIds } });
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }
}
