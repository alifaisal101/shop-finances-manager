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
    selector: (transactionRecord) => transactionRecord.amount,
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
