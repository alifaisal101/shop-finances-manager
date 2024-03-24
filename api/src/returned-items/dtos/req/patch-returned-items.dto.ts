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

export class PatchReturnedItemsDto {
  @IsMongoId()
  @IsNotEmpty()
  returnedItemsId: Types.ObjectId;

  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  purchaseRecordId: Types.ObjectId;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  retrievedAmount: number;

  @IsOptional()
  @IsDate()
  returnDate: Date;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  reason: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  additionalNotes: string;
}
