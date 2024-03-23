import { requiredString } from './../../../utils/objects/mongoose-options';
export const sex = {
  ...requiredString,
  enum: ['male', 'female'],
};
