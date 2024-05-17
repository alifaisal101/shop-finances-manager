import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from '../entities/roles.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private roleModel: Model<RoleDocument>,
  ) {}

  async findById(roleId: Types.ObjectId) {
    try {
      return await this.roleModel.findById(roleId);
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to find role.');
    }
  }

  async findAll(options: FetchRecordsDto) {}
}
