import { useRecoilState } from 'recoil';
import {
  displayDate,
  numberWithCommas,
} from '../../../../util/display.functions';
import DeleteBtnTable from '../../../stateless/DeleteBtnTable/DeleteBtnTable';
import EditBtnTable from '../../../stateless/EditBtnTable/EditBtnTable';
import './__CompaniesTable.css';
import { companiesStore } from '../../../../store/companies.store';
import Table from '../../../stateless/Table/Table';
import { useEffect } from 'react';

const companiesColumns = [
  {
    name: 'الأسم',
    selector: (company) => company.name,
  },
  {
    name: 'مجمل الديون',
    selector: (company) => numberWithCommas(company.totalDebt),
  },
  {
    name: 'مجمل الدفوعات',
    selector: (company) => numberWithCommas(company.totalPaidTo),
  },
  {
    name: 'مجمل المشتريات',
    selector: (company) =>
      numberWithCommas(company.totalPaidTo + company.totalDebt),
  },
  {
    name: 'تاريخ الاضافة',
    selector: (company) => displayDate(company.createdAt),
  },
  {
    name: 'تعديل',
    selector: (company) => <EditBtnTable />,
  },
  {
    name: 'حذف',
    selector: (company) => <DeleteBtnTable />,
  },
];

const CompaniesTable = () => {
  const [companiesState, setCompaniesState] = useRecoilState(companiesStore);

  useEffect(async () => {
    try {
      const fetchResult = await fetch(`${api}/`);
    } catch (err) {}
  }, []);

  return (
    <div className="subscriptions-table-container">
      <Table
        columns={companiesColumns}
        data={companiesState}
        expandable={false}
      ></Table>
    </div>
  );
};

export default CompaniesTable;
