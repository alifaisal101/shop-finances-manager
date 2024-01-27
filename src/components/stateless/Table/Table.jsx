import './__Table.css';

import DataTable from 'react-data-table-component';

const Table = (props) => {
  return (
    <DataTable
      columns={props.columns}
      data={props.data}
      expandableRows={(props.expandable && props.expandedComponent) || false}
      expandableRowsComponent={props.expandedComponent}
    />
  );
};

export default Table;
