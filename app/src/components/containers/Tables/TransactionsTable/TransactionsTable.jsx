import { IonButton, IonIcon, IonLabel } from '@ionic/react';
import { mapTransactionType } from '../../../../util/display.functions';
import { trendingDownOutline, trendingUpOutline } from 'ionicons/icons';
import SubTable from '../../../stateless/SubTable/SubTable';
import './__TransactionsTable.css';

const transactionsColumns = [
  {
    name: 'التسلسل',
    selector: (transactionRecord) => transactionRecord.index,
  },
  {
    name: 'العنوان',
    selector: (transactionRecord) => transactionRecord.title,
  },
  {
    name: 'السعر',
    selector: (transactionRecord) => (
      <IonButton
        className="label"
        size="small"
        color={transactionRecord.type == 'expense' ? 'danger' : 'success'}
      >
        <IonIcon
          icon={
            transactionRecord.type == 'expense'
              ? trendingDownOutline
              : trendingUpOutline
          }
          slot="end"
        ></IonIcon>
        {transactionRecord.amount}
      </IonButton>
    ),
  },
  {
    name: 'نوع اﻹجراء',
    selector: (transactionRecord) => mapTransactionType(transactionRecord.type),
  },

  {
    name: 'الوقت',
    selector: (transactionRecord) => transactionRecord.time,
  },
];

const TransactionsTable = (props) => {
  return (
    <div className="transactions-table-container">
      <SubTable
        columns={transactionsColumns}
        data={props.data.transactions}
        pagination={props.data.transactions.length > 5 ? true : false}
      ></SubTable>
    </div>
  );
};

export default TransactionsTable;
