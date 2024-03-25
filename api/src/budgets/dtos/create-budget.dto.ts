import { IsDate, IsNumber, Min } from 'class-validator';

export class CreateBudgetDto {
  @IsDate()
  budgetDate: Date;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  currentAmount: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalIncome: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalExpense: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  highestReachedAmount: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  lowestReachedAmount: number;
}
