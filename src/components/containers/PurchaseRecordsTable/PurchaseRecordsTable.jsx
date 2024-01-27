import './__PurchaseRecordsTable.css';

import Table from '../../stateless/Table/Table';
import { purchaseRecords } from './../../../preset-data';

const ExpandedComponent = ({ data }) => {
  console.log(data);
  return <h1>hi</h1>;
};

const columns = [
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Year',
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
];
const PurchaseRecordsTable = (props) => {
  return (
    <div className="purchase-records-table-container">
      <Table
        columns={columns}
        data={data}
        expandable={true}
        expandedComponent={ExpandedComponent}
      ></Table>
    </div>
  );
};

export default PurchaseRecordsTable;
