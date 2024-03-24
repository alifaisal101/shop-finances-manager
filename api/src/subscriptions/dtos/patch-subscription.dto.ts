import { Type } from 'class-transformer';
import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Types } from 'mongoose';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';
import { IsPaymentPeriod } from 'src/validators/is-payment-period.validator';

export class PatchSubscriptionDto {
  @IsMongoId()
  @IsNotEmpty()
  subscriptionId: Types.ObjectId;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsPaymentPeriod()
  paymentPeriod: string;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}
