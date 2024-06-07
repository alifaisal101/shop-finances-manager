import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { RoleDocument } from 'src/roles/entities/roles.entity';
import { User } from 'src/users/entities/users.entity';

export function IsAuthorized(permissions: string[]) {
  return UseGuards(new AuthorizationGuard(permissions));
}

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private readonly requiredPermissions: string[]) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const res = context.switchToHttp().getResponse();
    const currentUser: Partial<User> = res.currentUser || false;
    const usersPermissions: string[] = res.permissions || [];
    const currentRole = res.role || false;

    if (!currentUser || !currentRole) {
      throw new InternalServerErrorException(
        'No user or role was found while authorizing.',
      );
    }

    let isAuthorized = true;

    if ((currentRole as RoleDocument).role == 'admin') {
      return isAuthorized;
    }

    for (let i = 0; i < this.requiredPermissions.length; i++) {
      const permission = this.requiredPermissions[i];
      if (!usersPermissions.includes(permission)) {
        isAuthorized = false;
        break;
      }
    }

    if (!isAuthorized) {
      throw new ForbiddenException('Not Authorized to access this resource');
    }
    return isAuthorized;
  }
}
