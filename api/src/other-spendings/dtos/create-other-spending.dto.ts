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
import { Types } from 'mongoose';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';
import { IsPaymentType } from 'src/validators/is-payment-type.validator';

export class CreateOtherSpendingDto {
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

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  paidTo: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  debt: number;

  @IsDate()
  spendingDate: Date;

  @IsArray()
  @ValidateNested()
  @Type(() => Types.ObjectId)
  transactions: Types.ObjectId[];
}
