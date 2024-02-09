import './__SubTable.css';

import DataTable, { createTheme } from 'react-data-table-component';
import { themeState } from './../../../store/theme.store';
import { useRecoilState } from 'recoil';
createTheme(
  'dark-subtable',
  {
    text: {
      primary: '#f4f5f8',
      secondary: '#d7d8da',
    },
    background: {
      default: '#282a2e',
    },
  },
  'dark'
);

createTheme(
  'light-subtable',
  {
    text: {
      primary: '#121212',
      secondary: '#1e2023',
    },
    background: {
      default: '#f1f1f1',
    },
  },
  'light'
);

const SubTable = (props) => {
  const [themetoggle, setThemeToggle] = useRecoilState(themeState);

  return (
    <div className="subtable_container">
      <DataTable
        columns={props.columns}
        data={props.data}
        expandableRows={false}
        theme={themetoggle ? 'dark-subtable' : 'light-subtable'}
        pagination={props.pagination}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        paginationComponentOptions={{ selectAllRowsItem: true }}
      />
    </div>
  );
};

export default SubTable;
