import {
  ValidationOptions,
  Validate,
  isAlpha,
  isString,
} from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';

export function IsFullName(validationOptions?: ValidationOptions) {
  return Validate((value: any, _args: ValidationArguments) => {
    if (!value || !isString(value)) {
      return false;
    }

    value = value.replace(/\s/g, '');

    if (!isAlpha(value, 'en-US') && !isAlpha(value, 'ar')) {
      return false;
    }

    return true;
  }, validationOptions);
}
