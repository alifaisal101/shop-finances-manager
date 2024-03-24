import { Types } from 'mongoose';
import {
  IsAlphanumeric,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class PostCompanyDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  name: string;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalPaidTo: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalDebt: number;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => Types.ObjectId)
  purchaseRecords?: Types.ObjectId[];
}
