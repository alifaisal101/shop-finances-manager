import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from '../entities/roles.entity';
import { FilterQuery, Model, Types } from 'mongoose';
import { UsersService } from 'src/users/services/users.service';

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
      throw new InternalServerErrorException(err, 'Failed to find role.');
    }
  }

  async findAll(
    filterObj: FilterQuery<Role>,
    includeUsers: boolean,
    skip: number,
    limit: number,
  ) {
    try {
      const roles = await this.roleModel
        .find(filterObj)
        .skip(skip)
        .limit(limit);

      if (includeUsers) {
        roles.push();
      }
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to find all roles.');
    }
  }
}
