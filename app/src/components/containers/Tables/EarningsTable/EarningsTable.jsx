import Table from '../../../stateless/Table/Table';
import './__EarningsTable.css';

import { displayDate } from '../../../../util/display.functions';
import { earnings } from '../../../../preset-data';
import EditBtnTable from '../../../stateless/EditBtnTable/EditBtnTable';
import DeleteBtnTable from '../../../stateless/DeleteBtnTable/DeleteBtnTable';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { earningsStore } from '../../../../store/earnings.store';

const earningsColumns = [
  {
    name: 'التاريخ',
    selector: (earning) => displayDate(earning.date),
  },
  {
    name: 'اﻹيراد',
    selector: (earning) => earning.amount,
  },
  {
    name: 'تعديل',
    selector: (earning) => <EditBtnTable />,
  },
  {
    name: 'حذف',
    selector: (earning) => <DeleteBtnTable />,
  },
];

const EarningsTable = () => {
  const [earningsState, setEarningsState] = useRecoilState(earningsStore);

  return (
    <div className="earnings-table-container">
      <Table
        columns={earningsColumns}
        data={earningsState}
        expandable={false}
      ></Table>
    </div>
  );
};

export default EarningsTable;
