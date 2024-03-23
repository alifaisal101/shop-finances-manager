import { requiredRefObjectId } from './../../../utils/objects/mongoose-options';
export const companyId = {
  ...requiredRefObjectId,
  ref: 'company',
};
