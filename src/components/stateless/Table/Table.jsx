import './__Table.css';

import DataTable, { createTheme } from 'react-data-table-component';
import { themeState } from './../../../store/theme.store';
import { useRecoilState } from 'recoil';
import { IonSpinner } from '@ionic/react';

createTheme(
  'dark-table',
  {
    text: {
      primary: '#f4f5f8',
      secondary: '#d7d8da',
    },
    background: {
      default: '#1e2025',
    },
  },
  'dark'
);

createTheme(
  'light-table',
  {
    text: {
      primary: '#121212',
      secondary: '#1e2023',
    },
    background: {
      default: '#f5f6f9',
    },
  },
  'light'
);

const Table = (props) => {
  const [themetoggle, setThemeToggle] = useRecoilState(themeState);

  return (
    <DataTable
      columns={props.columns}
      data={props.data}
      expandableRows={(props.expandable && props.expandedComponent) || false}
      expandableRowsComponent={props.expandedComponent}
      expandableRowDisabled={props.expandableRowDisabled}
      theme={themetoggle ? 'dark-table' : 'light-table'}
      progressPending={props.loading}
      pagination={true}
      paginationServer={props.paginationServer}
      paginationTotalRows={props.totalRows}
      onChangeRowsPerPage={props.handlePerRowsChange}
      progressComponent={<IonSpinner className="table_spinner" />}
    />
  );
};

export default Table;
