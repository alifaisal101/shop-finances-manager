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

export class PatchEarningsDto {
  @IsMongoId()
  @IsNotEmpty()
  earningId: Types.ObjectId;

  @IsOptional()
  @IsDate()
  earningDate: Date;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  category: string;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}
