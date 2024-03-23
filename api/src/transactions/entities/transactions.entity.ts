import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
  requiredDate,
  requiredNumber,
  requiredString,
  unRequiredString,
} from 'src/utils/objects/mongoose-options';
import { transactionType } from './options/transactions.options';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  @Prop(requiredNumber)
  amount: number;

  @Prop(transactionType)
  type: string;

  @Prop(unRequiredString)
  companyName?: string;

  @Prop(requiredString)
  section: string;

  @Prop(requiredDate)
  transactionDate: Date;

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(requiredDate)
  updatedAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
