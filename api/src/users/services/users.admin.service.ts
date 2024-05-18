import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, RegisterUsersDto } from '../dtos/req/create-user.dto';
import { RolesService } from 'src/roles/services/roles.service';
import { hashSync } from 'bcryptjs';
import { User } from '../entities/users.entity';

@Injectable()
export class UsersAdminService {
  constructor(
    private usersSrv: UsersService,
    private rolesSrv: RolesService,
  ) {}

  async registerUsers(body: RegisterUsersDto) {
    const users: User[] = [];
    for (let i = 0; i < body.users.length; i++) {
      const user: Partial<User> & CreateUserDto = body.users[i];

      try {
        if (user.phoneNumber) {
          const notUniquePhoneNumber =
            (await this.findPhoneNumber(user.phoneNumber)).length || false;
          if (notUniquePhoneNumber) {
            throw new Error('Phone number already used.');
          }
        }

        const notUniqueUsername =
          (await this.findUsername(user.username))?.length || false;

        if (notUniqueUsername) {
          throw new Error('Username is already used.');
        }

        const role = (await this.rolesSrv.findById(user.roleId)) || false;
        if (!role) {
          throw new Error('Invalid role ID');
        }
      } catch (err) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: err.message,
          },
          HttpStatus.BAD_REQUEST,
          {
            cause: err,
          },
        );
      }

      try {
        user.password = hashSync(user.password, 12);
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
      user.createdAt = new Date();
      user.updatedAt = new Date();
      users.push(user as User);
    }
    return this.usersSrv.createMany(users);
  }

  async findUsername(username: string) {
    return await this.usersSrv.find({ username }, { _id: 1 }, false, 0, 1);
  }

  async findPhoneNumber(phoneNumber: string) {
    return await this.usersSrv.find({ phoneNumber }, { _id: 1 }, false, 0, 1);
  }
}
