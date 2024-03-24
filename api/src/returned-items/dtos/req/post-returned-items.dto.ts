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

export class PostReturnedItemsDto {
  @IsMongoId()
  @IsNotEmpty()
  purchaseRecordId: Types.ObjectId;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  retrievedAmount: number;

  @IsDate()
  returnDate: Date;

  @IsString()
  @IsNotEmpty()
  reason: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  additionalNotes: string;
}
