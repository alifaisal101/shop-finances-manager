import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from '../entities/roles.entity';
import { FilterQuery, Model, ProjectionType, Types } from 'mongoose';
import { insertMany, updateManyRecords } from 'src/utils/functions/database';
import { internalErrorExceptionCatch } from 'src/utils/functions/error';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private roleModel: Model<RoleDocument>,
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
      let query = this.roleModel.find(filterObj, projection);
      if (!all) {
        query = query.skip(skip).limit(limit);
      }

      if (includeUsers) {
        query = query.populate('userId');
      }

      return await query.exec();
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
    return await this.roleModel.deleteMany({ _id: { $in: rolesIds } });
  }
}
