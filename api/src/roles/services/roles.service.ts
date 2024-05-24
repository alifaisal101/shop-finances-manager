import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from '../entities/roles.entity';
import { FilterQuery, Model, ProjectionType, Types } from 'mongoose';
import { UsersService } from 'src/users/services/users.service';
import { insertMany } from 'src/utils/functions/database';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private roleModel: Model<RoleDocument>,
    private userSrv: UsersService,
  ) {}

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

  async find(
    filterObj: FilterQuery<Role>,
    projection: ProjectionType<Role>,
    includeUsers: boolean,
    skip: number,
    limit: number,
  ) {
    try {
      const roles = await this.roleModel
        .find(filterObj, projection)
        .skip(skip)
        .limit(limit);

      if (includeUsers) {
        roles.push();
      }
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
}
