import './__PaymentsRecordsTable.css';
import SubTable from './../../stateless/SubTable/SubTable';
import { displayDate } from '../../../util/display.functions';

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
  console.log(props);

  return (
    <div className="paymentsrecordstable_container">
      <SubTable columns={paymentsColumns} data={props.data.payments}></SubTable>
    </div>
  );
};

export default PaymentsRecordsTable;
