import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { uniqueRequiredString } from 'src/utils/objects/mongoose-options';

export type KeyDocument = HydratedDocument<Key>;

@Schema()
export class Key {
  @Prop(uniqueRequiredString)
  name: string;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  value: any;
}

export const KeySchema = SchemaFactory.createForClass(Key);
