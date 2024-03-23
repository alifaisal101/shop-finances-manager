import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { transactionsObjIdArr } from 'src/transactions/entities/options/transactions.options';
import {
  requiredDate,
  requiredNumber,
  requiredString,
} from 'src/utils/objects/mongoose-options';

export type EarningsDocument = HydratedDocument<Earnings>;

@Schema()
export class Earnings {
  @Prop(requiredDate)
  earningDate: Date;

  @Prop(requiredNumber)
  amount: number;

  @Prop(requiredString)
  category: string;

  @Prop(transactionsObjIdArr)
  transactions: Types.ObjectId[];

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(requiredDate)
  updatedAt: Date;
}

export const EarningsSchema = SchemaFactory.createForClass(Earnings);
