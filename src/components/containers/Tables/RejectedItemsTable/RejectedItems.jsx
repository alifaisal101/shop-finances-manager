import './__RejectedItems.css';

import { rejectedItems } from '../../../../preset-data';
import Table from '../../../stateless/Table/Table';
import {
  displayDate,
  paymentTypeMap,
} from '../../../../util/display.functions';

const rejectedItemsColumns = [
  {
    name: 'رقم القائمة',
    selector: (rejectedItem) => rejectedItem.purchaseRecord.number,
  },
  {
    name: 'التاريخ',
    selector: (rejectedItem) => displayDate(rejectedItem.date),
  },
  {
    name: 'السعر',
    selector: (rejectedItem) => rejectedItem.price,
  },
  {
    name: 'الوصف',
    selector: (rejectedItem) => rejectedItem.desc,
  },
];

const RejectedItemsTable = (props) => {
  return (
    <div className="rejected-items-table-container">
      <Table
        columns={rejectedItemsColumns}
        data={rejectedItems}
        expandable={false}
      ></Table>
    </div>
  );
};

export default RejectedItemsTable;
