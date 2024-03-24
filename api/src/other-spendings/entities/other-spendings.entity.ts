import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import {
  paymentType,
  transactionsObjIdArr,
} from 'src/transactions/entities/options/transactions.options';
import {
  requiredDate,
  requiredNumber,
  requiredString,
} from 'src/utils/objects/mongoose-options';

export type OtherSpendingDocument = HydratedDocument<OtherSpending>;

@Schema()
export class OtherSpending {
  @Prop(requiredString)
  title: string;

  @Prop(paymentType)
  paymentType: string;

  @Prop(requiredNumber)
  totalPayment: number;

  @Prop(requiredNumber)
  debt: number;

  @Prop(requiredDate)
  spendingDate: Date;

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(requiredDate)
  updatedAt: Date;

  @Prop(transactionsObjIdArr)
  transactions: Types.ObjectId[];
}

export const OtherSpendingSchema = SchemaFactory.createForClass(OtherSpending);
