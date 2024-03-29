import { Types } from 'mongoose';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';
import { IsPaymentType } from 'src/validators/is-payment-type.validator';
import { ModifyTransactionDto } from 'src/transactions/dtos/modify-transaction.dto';

export class PatchOtherSpendingDto {
  @IsMongoId()
  @IsNotEmpty()
  otherSpendingId: Types.ObjectId;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsPaymentType()
  paymentType: string;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  price: number;

  @IsOptional()
  @IsDate()
  spendingDate: Date;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => TransactionDto)
  newTransactions: TransactionDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => ModifyTransactionDto)
  modifiedTransactions: ModifyTransactionDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => Types.ObjectId)
  removedTransactions: Types.ObjectId[];
}
