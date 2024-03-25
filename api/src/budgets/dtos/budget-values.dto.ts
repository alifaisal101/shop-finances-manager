import { IsNumber, Min } from 'class-validator';

export class BudgetValues {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  currentAmount: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalIncome: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  totalExpense: number;
}
