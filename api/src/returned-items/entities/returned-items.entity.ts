import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { purchaseRecordId } from 'src/purchase-records/entities/options/purchase-records.options';
import {
  requiredDate,
  requiredNumber,
  requiredString,
} from 'src/utils/objects/mongoose-options';

export type ReturnedItemDocument = HydratedDocument<ReturnedItem>;

@Schema()
export class ReturnedItem {
  @Prop(purchaseRecordId)
  purchaseRecordId: Types.ObjectId;

  @Prop(requiredNumber)
  retrievedAmount: number;

  @Prop(requiredDate)
  returnDate: Date;

  @Prop(requiredString)
  reason: string;

  @Prop(requiredString)
  additionalNotes: string;

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(requiredDate)
  updatedAt: Date;
}

export const ReturnedItemSchema = SchemaFactory.createForClass(ReturnedItem);
