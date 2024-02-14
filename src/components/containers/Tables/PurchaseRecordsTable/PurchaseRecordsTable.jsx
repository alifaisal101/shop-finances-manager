import './__PurchaseRecordsTable.css';

import Table from '../../../stateless/Table/Table';

import PaymentsRecordsTable from './../PaymentsRecordsTable/PaymentsRecordsTable';
import { purchaseRecords } from '../../../../preset-data';
import {
  displayDate,
  paymentTypeMap,
} from '../../../../util/display.functions';
import EditBtnTable from '../../../stateless/EditBtnTable/EditBtnTable';
import DeleteBtnTable from '../../../stateless/DeleteBtnTable/DeleteBtnTable';
import { useRecoilState } from 'recoil';
import { purchaseRecordsStore } from '../../../../store/purchaseRecords.store';

const purchaseColumns = [
  {
    name: 'رقم القائمة',
    selector: (purchaseRecord) => purchaseRecord.recordNumber,
  },
  {
    name: 'الشركة',
    selector: (purchaseRecord) => purchaseRecord.company,
  },
  {
    name: 'نوع الدفع',
    selector: (purchaseRecord) => paymentTypeMap(purchaseRecord.paymentType),
  },
  {
    name: 'الدفعة الكلية',
    selector: (purchaseRecord) => purchaseRecord.totalCost,
  },
  {
    name: 'الدين',
    selector: (purchaseRecord) => purchaseRecord.debt,
  },
  {
    name: 'تاريخ القائمة',
    selector: (purchaseRecord) => displayDate(purchaseRecord.date),
  },
  {
    name: 'تعديل',
    selector: (purchaseRecord) => <EditBtnTable />,
  },
  {
    name: 'حذف',
    selector: (purchaseRecord) => <DeleteBtnTable />,
  },
];

const PurchaseRecordsTable = (props) => {
  const [purchaseRecordsState, setPurchaseRecordsState] =
    useRecoilState(purchaseRecordsStore);

  return (
    <div className="purchase-records-table-container">
      <Table
        columns={purchaseColumns}
        data={purchaseRecordsState}
        expandable={true}
        expandedComponent={PaymentsRecordsTable}
        expandableRowDisabled={(purchaseRecord) =>
          purchaseRecord.paymentType == 'direct' ? true : false
        }
      ></Table>
    </div>
  );
};

export default PurchaseRecordsTable;
