import { ValidationOptions, Validate, isAlpha } from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';

export function IsSex(validationOptions?: ValidationOptions) {
  return Validate((value: any, _args: ValidationArguments) => {
    const sexes = ['male', 'female'];
    if (!sexes.includes(value)) {
      return false;
    }
    return true;
  }, validationOptions);
}
