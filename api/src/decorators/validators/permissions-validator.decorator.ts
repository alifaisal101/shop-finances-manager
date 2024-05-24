import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { permissionsEnum } from 'src/config';

@ValidatorConstraint()
export class PermissionArrayValidator implements ValidatorConstraintInterface {
  validate(reqPermissions: unknown): boolean {
    if (!Array.isArray(reqPermissions)) {
      return false;
    }

    if (reqPermissions.length == 0) {
      return false;
    }

    for (let i = 0; i < reqPermissions.length; i++) {
      const requestPermission = reqPermissions[i];
      if (!permissionsEnum.includes(requestPermission)) {
        return false;
      }
    }

    return true;
  }

  defaultMessage(): string {
    return 'Provided permissions are invalid.';
  }
}
