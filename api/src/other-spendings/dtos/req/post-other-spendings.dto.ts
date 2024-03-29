import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';
import { IsPaymentType } from 'src/validators/is-payment-type.validator';

export class PostOtherSpendingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsPaymentType()
  paymentType: string;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  price: number;

  @IsDate()
  spendingDate: Date;

  @IsArray()
  @ValidateNested()
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}
