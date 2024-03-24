import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';
import { IsPaymentPeriod } from 'src/validators/is-payment-period.validator';

export class PostSubscriptionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  amount: number;

  @IsString()
  @IsNotEmpty()
  @IsPaymentPeriod()
  paymentPeriod: string;

  @IsArray()
  @ValidateNested()
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}
