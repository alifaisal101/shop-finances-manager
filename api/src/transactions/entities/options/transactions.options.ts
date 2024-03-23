import {
  requiredString,
  requiredRefObjectId,
} from '../../../utils/objects/mongoose-options';
export const transactionType = {
  ...requiredString,
  enum: ['income', 'expense'],
};

export const paymentType = {
  ...requiredString,
  enum: ['direct', 'indirect'],
};

export const transactionsObjIdArr = {
  required: true,
  type: [
    {
      ...requiredRefObjectId,
      ref: 'transaction',
    },
  ],
};
