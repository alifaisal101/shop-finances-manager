import { permissionsEnum } from 'src/config';
import { requiredString } from 'src/utils/objects/mongoose-options';

export const permissionsOptions = {
  type: [
    {
      enum: permissionsEnum,
      type: requiredString,
    },
  ],
  unique: false,
  required: false,
};
