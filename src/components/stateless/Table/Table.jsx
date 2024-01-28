import './__Table.css';

import DataTable, { createTheme } from 'react-data-table-component';
import { themeState } from './../../../store/theme.store';
import { useRecoilState } from 'recoil';

createTheme(
  'dark-table',
  {
    text: {
      primary: '#FFFFFF',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  },
  'dark'
);

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
