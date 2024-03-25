import { ValidationOptions, Validate } from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';

export function IsTransactionType(validationOptions?: ValidationOptions) {
  return Validate((value: any, _args: ValidationArguments) => {
    const transactionTypes = ['expense', 'income'];
    if (!transactionTypes.includes(value)) {
      return false;
    }
    return true;
  }, validationOptions);
}
