import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { transactionsObjIdArr } from 'src/transactions/entities/options/transactions.options';
import {
  requiredDate,
  requiredNumber,
  requiredString,
} from 'src/utils/objects/mongoose-options';

export type EarningDocument = HydratedDocument<Earning>;

@Schema()
export class Earning {
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

export const EarningSchema = SchemaFactory.createForClass(Earning);
