import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import {
  requiredDate,
  requiredRefObjectId,
  requiredString,
  unRequiredString,
  uniqueRequiredString,
  uniqueUnRequiredString,
} from 'src/utils/objects/mongoose-options';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop(uniqueRequiredString)
  username: string;

  @Prop(requiredString)
  password: string;

  @Prop({ ...requiredRefObjectId, ref: 'role' })
  roleId: Types.ObjectId;

  @Prop(uniqueUnRequiredString)
  phoneNumber?: string;

  @Prop(requiredString)
  fullName: string;

  @Prop(unRequiredString)
  workShift?: string;

  @Prop(unRequiredString)
  photo?: string;

  @Prop(unRequiredString)
  notes?: string;

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(requiredDate)
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
