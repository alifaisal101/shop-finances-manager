import { paymentPeriod } from './options/subscriptions.options';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { transactionsObjIdArr } from 'src/transactions/entities/options/transactions.options';
import {
  requiredDate,
  requiredNumber,
  requiredString,
  unRequiredDate,
  unRequiredString,
} from 'src/utils/objects/mongoose-options';

export type SubscriptionDocument = HydratedDocument<Subscription>;

@Schema()
export class Subscription {
  @Prop(requiredString)
  title: string;

  @Prop(paymentPeriod)
  paymentPeriod: string;

  @Prop(requiredNumber)
  amount: number;

  @Prop(unRequiredString)
  description?: string;

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(unRequiredDate)
  updatedAt: Date;

  @Prop(transactionsObjIdArr)
  transactions: Types.ObjectId[];
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
