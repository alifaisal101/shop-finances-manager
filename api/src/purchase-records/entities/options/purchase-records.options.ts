import { requiredRefObjectId } from '../../../utils/objects/mongoose-options';
export const purchaseRecordId = {
  ...requiredRefObjectId,
  ref: 'purchaseRecord',
};

export const purchaseRecordsIdsArr = {
  required: true,
  type: [purchaseRecordId],
};
