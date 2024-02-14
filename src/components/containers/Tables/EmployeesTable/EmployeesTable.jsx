import Table from '../../../stateless/Table/Table';
import './__EmployeesTable.css';
import { displayDate, displaySex } from '../../../../util/display.functions';
import { employees } from '../../../../preset-data';
import EditBtnTable from '../../../stateless/EditBtnTable/EditBtnTable';
import DeleteBtnTable from '../../../stateless/DeleteBtnTable/DeleteBtnTable';
import { useRecoilState } from 'recoil';
import { employeesStore } from '../../../../store/employees.store';

const employeesColumns = [
  {
    name: 'الأسم',
    selector: (employee) => employee.name,
  },
  {
    name: 'الجنس',
    selector: (employee) => displaySex(employee.sex),
  },
  {
    name: 'رقم الهاتف',
    selector: (employee) => employee.phoneNumber,
  },
  {
    name: 'الراتب',
    selector: (employee) => employee.salary,
  },
  {
    name: 'موعد الدفع',
    selector: (employee) => displayDate(employee.payDate),
  },
  {
    name: 'تعديل',
    selector: (employee) => <EditBtnTable />,
  },
  {
    name: 'حذف',
    selector: (employee) => <DeleteBtnTable />,
  },
];

const EmployeesTable = () => {
  const [employeesState, setEmployeesState] = useRecoilState(employeesStore);
  return (
    <div className="employees-table-container">
      <Table
        columns={employeesColumns}
        data={employeesState}
        expandable={false}
      ></Table>
    </div>
  );
};

export default EmployeesTable;
