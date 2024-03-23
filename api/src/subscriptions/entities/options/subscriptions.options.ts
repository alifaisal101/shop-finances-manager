import { requiredString } from './../../../utils/objects/mongoose-options';
export const paymentPeriod = {
  ...requiredString,
  enum: ['daily', 'weekly', 'monthly', 'yearly'],
};
