import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { transactionObjId } from 'src/transactions/entities/options/transactions.options';
import {
  requiredDate,
  requiredNumber,
  requiredString,
} from 'src/utils/objects/mongoose-options';

export type EarningDocument = HydratedDocument<Earning>;

@Schema()
export class Earning {}

export const EarningSchema = SchemaFactory.createForClass(Earning);
