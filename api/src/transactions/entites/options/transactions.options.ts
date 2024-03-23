import { requiredString } from './../../../utils/objects/mongoose-options';
export const transactionType = {
  ...requiredString,
  enum: ['income', 'expense'],
};

export const paymentType = {
  ...requiredString,
  enum: ['direct', 'indirect'],
};
