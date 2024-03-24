import { Types } from 'mongoose';
import {
  IsAlphanumeric,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

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
  purchaseRecords?: Types.ObjectId[];
}
