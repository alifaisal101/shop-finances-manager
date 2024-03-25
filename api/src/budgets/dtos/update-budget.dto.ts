import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';
import { Types } from 'mongoose';

export class UpdateBudgetDto {
  @IsMongoId()
  @IsNotEmpty()
  budgetId: Types.ObjectId;

  @IsOptional()
  @IsDate()
  budgetDate?: Date;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  currentAmount?: number;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalIncome?: number;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalExpense?: number;
}
