import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  FilterQuery,
  Model,
  PipelineStage,
  ProjectionType,
  Types,
} from 'mongoose';
import { User, UserDocument } from '../entities/users.entity';
import { insertMany, updateManyRecords } from 'src/utils/functions/database';
import { internalErrorExceptionCatch } from 'src/utils/functions/error';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

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
  ) {
    try {
      const pipeline: PipelineStage[] = [
        {
          $match: filterObj, // Filter documents based on the filterObj
        },
        {
          // @ts-ignore
          $project: projection, // Project only the specified fields
        },
        {
          $skip: skip, // Skip the specified number of documents
        },
        {
          $limit: limit, // Limit the number of documents returned
        },
      ];

      if (includeRoles)
        pipeline.push({
          $lookup: {
            from: 'roles', // Name of the Roles collection
            localField: 'roleId', // Field in the Users collection
            foreignField: '_id', // Field in the Roles collection
            as: 'role', // Alias for the joined role object
          },
        });

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

  async remove() {}
}
