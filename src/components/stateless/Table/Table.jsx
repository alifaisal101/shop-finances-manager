import './__Table.css';

import DataTable, { createTheme } from 'react-data-table-component';
import { themeState } from './../../../store/theme.store';
import { useRecoilState } from 'recoil';
import { IonSpinner } from '@ionic/react';

createTheme('dark-table', {}, 'dark');

createTheme('light-table', {}, 'light');

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
