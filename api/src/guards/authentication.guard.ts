import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { UsersService } from 'src/users/services/users.service';
import { jwtSecret } from './../config';
import { RolesService } from 'src/roles/services/roles.service';

export function IsAuthenticated() {
  return UseGuards(AuthenticationGuard);
}

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private readonly usersSrv: UsersService,
    private readonly rolesSrv: RolesService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const token: string | false =
      req.headers?.authorization?.split(' ')[1] || false;

    if (!token) {
      return false;
    }
    try {
      const result = verify(token, jwtSecret) as any;
      const user = (await this.usersSrv.findById(result.id)) || false;

      if (!user) {
        return false;
      }

      // Fetching role
      const role = await this.rolesSrv.findById(user.roleId);

      res.permissions = role.permissions;
      res.currentUser = user;
      res.role = role;
      return true;
    } catch (err) {
      return false;
    }
  }
}
