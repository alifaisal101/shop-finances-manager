import './__PurchaseRecordsTable.css';

import Table from '../../stateless/Table/Table';
import { purchaseRecords } from './../../../preset-data';

const paymentTypeMap = (payType) => {
  const paymentsTypes = {
    direct: 'نقد',
    indirect: 'آجل',
  };

  return paymentsTypes[payType];
};

const displayDate = (dateObj) => dateObj.toISOString().substring(0, 10);

const numberWithCommas = (number) => {
  if (!number || number < 1000) {
    return '';
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
const paymentsColumns = [
  {
    name: 'تاريخ التسديد',
    selector: (paymentRecord) => displayDate(paymentRecord.paydate),
  },
  {
    name: 'الدفعة',
    selector: (paymentRecord) => paymentRecord.paymentAmount,
  },
];

const ExpandedComponent = ({ data }) => {};

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
];

const PurchaseRecordsTable = (props) => {
  return (
    <div className="purchase-records-table-container">
      <Table
        columns={purchaseColumns}
        data={purchaseRecords}
        expandable={true}
        expandedComponent={ExpandedComponent}
      ></Table>
    </div>
  );
};

export default PurchaseRecordsTable;
