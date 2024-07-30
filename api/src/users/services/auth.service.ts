import { Injectable, UnauthorizedException } from '@nestjs/common';
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
import { ValidateTokenDto } from '../dtos/req/Validate-Token.dto';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    private usersSrv: UsersService,
    private rolesSrv: RolesService,
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

      const role = await this.rolesSrv.findById(user.roleId);

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
      return { value: token, expiresIn: jwtExpiration, createdAt: new Date() };
    } catch (err) {
      throw internalErrorExceptionCatch(err);
    }
  }

  async validateToken(body: ValidateTokenDto) {
    const { token } = body;

    if (!token) {
      return false;
    }
    try {
      const result = verify(token, jwtSecret) as any;
      const user = (await this.usersSrv.findById(result.id)) || false;
      if (!user) {
        throw new Error();
      }

      // Fetching role
      const role = await this.rolesSrv.findById(user.roleId);

      // @ts-ignore
      return { isTokenValid: true, ...user._doc, role };
    } catch (err) {
      throw new UnauthorizedException('Unauthorized. Token is invalid.');
    }
  }
}
