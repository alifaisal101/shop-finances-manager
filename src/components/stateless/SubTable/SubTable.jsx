import './__SubTable.css';

import DataTable, { createTheme } from 'react-data-table-component';

createTheme(
  'dark-subtable',
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

const SubTable = (props) => {
  return (
    <div className="subtable_container">
      <DataTable
        columns={props.columns}
        data={props.data}
        expandableRows={false}
        theme="dark-subtable"
      />
    </div>
  );
};

export default SubTable;
