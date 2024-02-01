import Table from '../../../stateless/Table/Table';
import './__EarningsTable.css';

import { displayDate } from '../../../../util/display.functions';
import { earnings } from '../../../../preset-data';

const earningsColumns = [
  {
    name: 'التاريخ',
    selector: (earning) => displayDate(earning.date),
  },
  {
    name: 'اﻹيراد',
    selector: (earning) => earning.amount,
  },
];

const EarningsTable = () => {
  return (
    <div className="earnings-table-container">
      <Table
        columns={earningsColumns}
        data={earnings}
        expandable={false}
      ></Table>
    </div>
  );
};

export default EarningsTable;
