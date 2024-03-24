import { Type } from 'class-transformer';
import {
  IsAlpha,
  IsArray,
  IsNotEmpty,
  IsNumberString,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';
import { IsPaymentPeriod } from 'src/validators/is-payment-period.validator';

export class PostEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @IsPaymentPeriod()
  paymentPeriod: string;

  @IsArray()
  @ValidateNested()
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}
