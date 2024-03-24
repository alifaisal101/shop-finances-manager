import { ValidationOptions, Validate } from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';

export function IsPaymentPeriod(validationOptions?: ValidationOptions) {
  return Validate((value: any, _args: ValidationArguments) => {
    const paymentPeriods = ['monthly', 'weekly', 'daily'];
    if (!paymentPeriods.includes(value)) {
      return false;
    }
    return true;
  }, validationOptions);
}
