import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from '../entities/roles.entity';
import {
  Connection,
  FilterQuery,
  Model,
  PipelineStage,
  ProjectionType,
  Types,
} from 'mongoose';
import { insertMany, updateManyRecords } from 'src/utils/functions/database';
import { internalErrorExceptionCatch } from 'src/utils/functions/error';
import { isNotEmptyObject } from 'class-validator';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private roleModel: Model<RoleDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  async createMany(roles: Role[]) {
    try {
      return await insertMany(roles, this.roleModel);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: err.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: err,
        },
      );
    }
  }

  async updateMany(roles: Partial<Role>[]) {
    try {
      return await updateManyRecords(roles, this.roleModel);
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  async find(
    filterObj: FilterQuery<Role>,
    projection: ProjectionType<Role>,
    includeUsers: boolean,
    skip: number,
    limit: number,
    all: boolean,
  ) {
    try {
      const pipeline: PipelineStage[] = [
        {
          $match: filterObj,
        },
      ];

      if (isNotEmptyObject(projection)) {
        pipeline.push({
          // @ts-ignore
          $project: projection,
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

      if (includeUsers) {
        pipeline.push({
          $lookup: {
            from: 'users', // Name of the Roles collection
            localField: '_id', // Field in the Users collection
            foreignField: 'roleId', // Field in the Roles collection
            as: 'users', // Alias for the joined role object
          },
        });
      }

      return await this.roleModel.aggregate(pipeline);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: err.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: err,
        },
      );
    }
  }

  async findById(roleId: Types.ObjectId) {
    try {
      return await this.roleModel.findById(roleId);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: err.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: err,
        },
      );
    }
  }

  async removeMany(rolesIds: Types.ObjectId[]) {
    try {
      return await this.roleModel.deleteMany({ _id: { $in: rolesIds } });
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: err.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: err,
        },
      );
    }
  }

  async removeAll() {
    try {
      return await this.roleModel.deleteMany({});
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: err.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: err,
        },
      );
    }
  }
}
