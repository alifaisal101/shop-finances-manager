import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto } from '../dtos/req/login.dto';
import {
  badRequestExceptionCatch,
  internalErrorExceptionCatch,
} from 'src/utils/functions/error';
import { UsersAdminService } from './users.admin.service';
import { compareSync } from 'bcryptjs';
import { UserDocument } from '../entities/users.entity';
import { sign } from 'jsonwebtoken';
import { jwtExpiration, jwtSecret } from 'src/config';
import { RolesService } from 'src/roles/services/roles.service';

@Injectable()
export class AuthService {
  constructor(
    private usersSrv: UsersService,
    private roleSrv: RolesService,
  ) {}

  async findUserByUsername(username: string): Promise<UserDocument> {
    return (
      await this.usersSrv.find({ username }, {}, false, 0, 1, false)
    )[0] as UserDocument;
  }

  async login(body: LoginDto) {
    try {
      const user = await this.findUserByUsername(body.username);
      if (!user) {
        throw new Error('Username not found.');
      }

      const result = compareSync(body.password, user.password);
      if (!result) {
        throw new Error('Wrong password.');
      }

      const role = await this.roleSrv.findById(user.roleId);

      return { ...user, role, token: await this.signJwt(user) };
    } catch (err) {
      throw badRequestExceptionCatch(err);
    }
  }

  async signJwt(user: UserDocument) {
    try {
      const token = sign({ id: user._id }, jwtSecret, {
        expiresIn: jwtExpiration,
      });
      return { value: token, expiresIn: jwtExpiration };
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }
}
