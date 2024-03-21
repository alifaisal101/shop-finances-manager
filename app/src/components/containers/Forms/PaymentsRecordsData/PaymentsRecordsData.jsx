import './__PaymentsRecordsData.css';
import SubTable from '../../../stateless/SubTable/SubTable';
import { displayDate } from '../../../../util/display.functions';
import { IonInput } from '@ionic/react';

const paymentsColumns = [
  {
    name: 'تاريخ التسديد',
    selector: (paymentRecord) => (
      <IonInput type="date" value={displayDate(paymentRecord.paydate)} />
    ),
  },
  {
    name: 'الدفعة',
    selector: (paymentRecord) => (
      <IonInput
        value={paymentRecord.paymentAmount}
        type="number"
        step="1000"
        max={1000000000}
        min={0}
      />
    ),
  },
];

const PaymentsRecordsData = (props) => {
  return (
    <div className="paymentsrecordsdata_container">
      <SubTable
        columns={paymentsColumns}
        data={props.data.payments}
        pagination={props.data.payments.length > 5 ? true : false}
      ></SubTable>
    </div>
  );
};

export default PaymentsRecordsData;
