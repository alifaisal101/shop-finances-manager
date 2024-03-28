import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { purchaseRecordsIdsArr } from 'src/purchase-records/entities/options/purchase-records.options';
import {
  requiredDate,
  requiredNumber,
  requiredString,
} from 'src/utils/objects/mongoose-options';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @Prop(requiredString)
  name: string;

  @Prop(requiredNumber)
  totalPaidTo: number;

  @Prop(requiredNumber)
  totalDebt: number;

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(requiredDate)
  updatedAt: Date;

  @Prop(purchaseRecordsIdsArr)
  purchaseRecords: Types.ObjectId[];
}

export const CompanySchema = SchemaFactory.createForClass(Company);
