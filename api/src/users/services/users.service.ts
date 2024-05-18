import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from '../entities/users.entity';
import { insertMany } from 'src/utils/functions/database';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: User) {
    try {
      return await this.userModel.create(user);
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to create user.');
    }
  }

  async createMany(users: User[]) {
    try {
      return await insertMany(users, this.userModel);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create multiple users.',
      );
    }
  }

  private async updateOne(
    userId: Types.ObjectId,
    modifiedUser: Partial<User>,
  ) {}

  async updateMany() {
    try {
      await console.log();
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create multiple users.',
      );
    }
  }

  async find() {}

  async findById() {}

  async remove() {}
}
