import { Type } from 'class-transformer';
import {
  IsAlpha,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';
import { IsPaymentPeriod } from 'src/validators/is-payment-period.validator';
import { IsSex } from 'src/validators/is-sex.validator';

export class PostEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: string;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  salary: number;

  @IsString()
  @IsNotEmpty()
  @IsSex()
  sex: string;

  @IsString()
  @IsNotEmpty()
  @IsPaymentPeriod()
  paymentPeriod: string;
}
