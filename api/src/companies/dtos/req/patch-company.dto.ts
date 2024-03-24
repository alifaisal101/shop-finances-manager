import { Types } from 'mongoose';
import {
  IsAlphanumeric,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

export class PatchCompanyDto {
  @IsMongoId()
  @IsNotEmpty()
  companyId: Types.ObjectId;

  @IsOptional()
  @IsAlphanumeric()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalPaidTo: number;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalDebt: number;

  @IsOptional()
  @IsArray()
  purchaseRecords?: Types.ObjectId[];
}
