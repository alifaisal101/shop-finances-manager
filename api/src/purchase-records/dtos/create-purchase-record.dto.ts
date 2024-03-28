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
import { Type } from 'class-transformer';

export class CreatePurchaseRecordDto {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  number: string;

  @IsMongoId()
  @IsNotEmpty()
  companyId: Types.ObjectId;

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
  recordDate: Date;

  @IsArray()
  @ValidateNested()
  @Type(() => Types.ObjectId)
  transactions: Types.ObjectId[];
}
