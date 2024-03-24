import { Types } from 'mongoose';
import {
  IsArray,
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { IsPaymentType } from 'src/validators/is-payment-type.validator';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';
import { Type } from 'class-transformer';

export class PostPurchaseRecord {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  number: number;

  @IsMongoId()
  @IsNotEmpty()
  companyId: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  @IsPaymentType()
  paymentType: string;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalPayment: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  debt: number;

  @IsDate()
  recordDate: Date;

  @IsArray()
  @ValidateNested()
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}
