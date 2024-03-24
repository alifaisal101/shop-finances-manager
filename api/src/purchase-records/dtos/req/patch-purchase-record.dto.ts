import { Types } from 'mongoose';
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
import { IsPaymentType } from 'src/validators/is-payment-type.validator';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';
import { Type } from 'class-transformer';

export class PostPurchaseRecord {
  @IsMongoId()
  @IsNotEmpty()
  purchaseRecordId: Types.ObjectId;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  number: number;

  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  companyId: Types.ObjectId;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsPaymentType()
  paymentType: string;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalPayment: number;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  debt: number;

  @IsOptional()
  @IsDate()
  recordDate: Date;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}
