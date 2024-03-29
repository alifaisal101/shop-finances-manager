import { Types } from 'mongoose';
import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

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
}
