import { ValidationOptions, Validate } from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';

export function IsPaymentType(validationOptions?: ValidationOptions) {
  return Validate((value: any, _args: ValidationArguments) => {
    const paymentTypes = ['direct', 'indirect'];
    if (!paymentTypes.includes(value)) {
      return false;
    }
    return true;
  }, validationOptions);
}
