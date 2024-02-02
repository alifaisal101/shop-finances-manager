import './__BudgetsTable.css';
import Table from '../../../stateless/Table/Table';

import { displayDate } from '../../../../util/display.functions';
import { budgets } from '../../../../preset-data';
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import Example from '../../Print';
import BudgetReportPrint from '../../BudgetReportPrint/BudgetReportPrint';
import { IonButton } from '@ionic/react';

const budgetsColumns = [
  {
    name: 'التاريخ',
    selector: (budget) => displayDate(budget.date),
  },
  {
    name: 'الموازنة الحالية',
    selector: (budget) => budget.currentAmount,
  },
  {
    name: 'أعلى موازنة',
    selector: (budget) => budget.maxReachedAmount,
  },
  {
    name: 'أقل موازنة',
    selector: (budget) => budget.lowestReachedAmount,
  },
];

const BudgetsTable = () => {
  return (
    <div className="budgets-table-container">
      <BudgetReportPrint PrintOnClickComp={<IonButton />}></BudgetReportPrint>
      <Table
        columns={budgetsColumns}
        data={budgets}
        expandable={true}
        expandableRowDisabled={(purchaseRecord) =>
          purchaseRecord.transactions.length == 0
        }
        expandedComponent={TransactionsTable}
      ></Table>
    </div>
  );
};

export default BudgetsTable;
