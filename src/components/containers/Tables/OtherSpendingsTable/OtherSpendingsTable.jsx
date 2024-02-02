import {
  paymentTypeMap,
  displayDate,
} from '../../../../util/display.functions';
import Table from '../../../stateless/Table/Table';
import './__OtherSpendingsTable.css';
import { otherSpendings } from '../../../../preset-data';
import PaymentsRecordsTable from '../PaymentsRecordsTable/PaymentsRecordsTable';
import EditBtnTable from '../../../stateless/EditBtnTable/EditBtnTable';
import DeleteBtnTable from '../../../stateless/DeleteBtnTable/DeleteBtnTable';

const otherSpendingsTableColumns = [
  {
    name: 'العنوان',
    selector: (otherSpending) => otherSpending.title,
  },
  {
    name: 'نوع الدفع',
    selector: (otherSpending) => paymentTypeMap(otherSpending.paymentType),
  },
  {
    name: 'الدفعة الكلية',
    selector: (otherSpending) => otherSpending.totalCost,
  },
  {
    name: 'الدين',
    selector: (otherSpending) => otherSpending.debt,
  },
  {
    name: 'التاريخ',
    selector: (otherSpending) => displayDate(otherSpending.date),
  },
  {
    name: 'تعديل',
    selector: (otherSpending) => <EditBtnTable />,
  },
  {
    name: 'حذف',
    selector: (otherSpending) => <DeleteBtnTable />,
  },
];

const OtherSpendingsTable = () => {
  return (
    <div className="other-spendings-table-container">
      <Table
        columns={otherSpendingsTableColumns}
        data={otherSpendings}
        expandable={true}
        expandedComponent={PaymentsRecordsTable}
        expandableRowDisabled={(otherSpending) =>
          otherSpending.paymentType == 'direct' ? true : false
        }
      ></Table>
    </div>
  );
};

export default OtherSpendingsTable;
