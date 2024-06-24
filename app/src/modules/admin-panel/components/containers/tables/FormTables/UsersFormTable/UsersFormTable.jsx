import DeleteBtnTable from '../../../../../../../components/stateless/DeleteBtnTable/DeleteBtnTable';
import Table from '../../../../../../../components/stateless/Table/Table';
import { convertMilitaryToArabicTime } from '../../../../../../../util/display.functions';
import './__UsersFormTable.css';

const columns = [
  {
    name: 'أسم المستخدم',
    selector: (user) => user.username,
  },
  {
    name: 'الأسم الكامل',
    selector: (user) => user.fullName,
  },
  {
    name: 'رقم الهاتف',
    selector: (user) => user.phoneNumber,
  },
  {
    name: 'كلمة السر',
    selector: (user) => user.password,
  },
  {
    name: 'الجنس',
    selector: (user) => user.sex,
  },
  {
    name: 'أوقات العمل',
    selector: (user) => convertMilitaryToArabicTime(user.shift),
  },
  {
    name: 'الملاحظات',
    selector: (user) => user.notes,
  },
  {
    name: 'حذف',
    selector: (user) => <DeleteBtnTable />,
  },
];

const UsersFormTable = (props) => {
  console.log(props.data);
  return (
    <Table
      columns={columns}
      data={props.data}
      expandableRows={false}
      progressPending={props.loading}
    ></Table>
  );
};

export default UsersFormTable;
