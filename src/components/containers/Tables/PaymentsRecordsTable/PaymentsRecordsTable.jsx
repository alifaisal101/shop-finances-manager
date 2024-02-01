import './__PaymentsRecordsTable.css';
import SubTable from '../../../stateless/SubTable/SubTable';
import { displayDate } from '../../../../util/display.functions';

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

const PaymentsRecordsTable = (props) => {
  return (
    <div className="paymentsrecordstable_container">
      <SubTable
        columns={paymentsColumns}
        data={props.data.payments}
        pagination={props.data.payments.length > 5 ? true : false}
      ></SubTable>
    </div>
  );
};

export default PaymentsRecordsTable;
