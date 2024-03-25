import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';
import { Types } from 'mongoose';
import { IsTransactionType } from 'src/validators/is-transaction-type.validator';

export class ModifyTransactionDto {
  @IsMongoId()
  @IsNotEmpty()
  transactionId: Types.ObjectId;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  amount: number;

  @IsString()
  @IsNotEmpty()
  section: string;

  @IsString()
  @IsNotEmpty()
  @IsTransactionType()
  type: string;

  @IsString()
  @IsNotEmpty()
  companyName?: string;

  @IsDate()
  transactionDate: Date;
}
