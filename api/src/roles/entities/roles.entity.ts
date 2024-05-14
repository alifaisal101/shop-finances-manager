import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import {
  requiredDate,
  requiredString,
  unRequiredString,
} from 'src/utils/objects/mongoose-options';
import { permissionsOptions } from './options/roles.options';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @Prop(requiredString)
  role: String;

  @Prop(unRequiredString)
  description: string;

  @Prop(permissionsOptions)
  permissions: string[];

  @Prop(requiredDate)
  createdAt: Date;

  @Prop(requiredDate)
  updatedAt: Date;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
