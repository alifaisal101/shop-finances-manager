import './__UsersTable.css';

import DeleteBtnTable from '../../../../../../components/stateless/DeleteBtnTable/DeleteBtnTable';
import EditBtnTable from '../../../../../../components/stateless/EditBtnTable/EditBtnTable';
import { displayDate } from '../../../../../../util/display.functions';
import Table from '../../../../../../components/stateless/Table/Table';
import { useRecoilState } from 'recoil';
import { usersState } from '../../../../store/data/users.store';
import { useEffect } from 'react';
import { postFetchUsers } from '../../../../api-requests/users';
import { tokenState } from '../../../../../../store/app/token.store';

const columns = [
  {
    name: 'ID',
    selector: (user) => user._id,
  },
  {
    name: 'الأسم الكامل',
    selector: (user) => user.fullName,
  },

  {
    name: 'أسم المستخدم',
    selector: (user) => user.username,
  },
  {
    name: 'الدور',
    selector: (user) => user.role.role,
  },
  {
    name: 'رقم الهاتف',
    selector: (user) => user.phoneNumber,
  },
  {
    name: 'أوقات العمل',
    selector: (user) => user.shift,
  },
  {
    name: 'الملاحظات',
    selector: (user) => user.notes,
  },
  {
    name: 'تاريخ الانشاء',
    selector: (user) => displayDate(user.createdAt),
  },
  {
    name: 'تاريخ التعديل',
    selector: (user) => displayDate(user.updatedAt),
  },
  {
    name: 'تعديل',
    selector: (user) => <EditBtnTable />,
  },
  {
    name: 'حذف',
    selector: (user) => <DeleteBtnTable />,
  },
];

const UsersTable = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const [users, setUsers] = useRecoilState(usersState);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await postFetchUsers(token.value);
      console.log(result);
      setUsers(result);
    };
    fetchUsers();
  }, []);

  return (
    <div className="users-table-container">
      <Table columns={columns} data={users}></Table>
    </div>
  );
};

export default UsersTable;
