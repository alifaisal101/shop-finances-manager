import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  requiredDate,
  requiredNumber,
} from 'src/utils/objects/mongoose-options';

export type BudgetDocument = HydratedDocument<Budget>;

@Schema()
export class Budget {
  @Prop(requiredDate)
  budgetDate: Date;

  @Prop(requiredNumber)
  currentAmount: number;

  @Prop(requiredNumber)
  totalIncome: number;

  @Prop(requiredNumber)
  totalExpense: number;

  @Prop(requiredNumber)
  highestReachedAmount: number;

  @Prop(requiredNumber)
  lowestReachedAmount: number;

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(requiredDate)
  updatedAt: Date;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);
