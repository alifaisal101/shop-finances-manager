import './__Table.css';

import DataTable, { createTheme } from 'react-data-table-component';
import { themeState } from './../../../store/theme.store';
import { useRecoilState } from 'recoil';

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
    />
  );
};

export default Table;
