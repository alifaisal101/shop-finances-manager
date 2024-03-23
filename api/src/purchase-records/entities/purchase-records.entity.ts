import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { companyId } from 'src/companies/entities/options/companies.options';
import {
  paymentType,
  transactionsObjIdArr,
} from 'src/transactions/entities/options/transactions.options';
import {
  requiredDate,
  requiredNumber,
  requiredString,
} from 'src/utils/objects/mongoose-options';

export type PurchaseRecordDocument = HydratedDocument<PurchaseRecord>;

@Schema()
export class PurchaseRecord {
  @Prop(requiredString)
  number: string;

  @Prop(companyId)
  companyId: Types.ObjectId;

  @Prop(paymentType)
  paymentType: string;

  @Prop(requiredNumber)
  totalPayment: number;

  @Prop(requiredNumber)
  debt: number;

  @Prop(requiredDate)
  recordDate: Date;

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(requiredDate)
  updatedAt: Date;

  @Prop(transactionsObjIdArr)
  transactions: Types.ObjectId[];
}

export const PurchaseRecordSchema =
  SchemaFactory.createForClass(PurchaseRecord);
