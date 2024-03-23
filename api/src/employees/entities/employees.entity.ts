import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { paymentPeriod } from 'src/subscriptions/entities/options/subscriptions.options';
import { transactionsObjIdArr } from 'src/transactions/entities/options/transactions.options';
import {
  requiredDate,
  requiredNumber,
  requiredString,
  unRequiredDate,
  unRequiredString,
} from 'src/utils/objects/mongoose-options';
import { sex } from './options/employee.options';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop(requiredString)
  name: string;

  @Prop(requiredString)
  phoneNumber: string;

  @Prop(paymentPeriod)
  paymentPeriod: string;

  @Prop(requiredNumber)
  salary: number;

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(unRequiredDate)
  updatedAt: Date;

  @Prop(sex)
  sex: string;

  @Prop(transactionsObjIdArr)
  transactions: Types.ObjectId[];
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
