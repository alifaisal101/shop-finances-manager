import './__BudgetsTable.css';
import Table from '../../../stateless/Table/Table';

import { displayDate } from '../../../../util/display.functions';
import { budgets } from '../../../../preset-data';
import TransactionsTable from '../TransactionsTable/TransactionsTable';
import BudgetReportPrint from '../../BudgetReportPrint/BudgetReportPrint';
import { IonButton, IonIcon } from '@ionic/react';
import { printOutline } from 'ionicons/icons';
import { useRef } from 'react';

const BudgetsTable = () => {
  const handleBudgetPrint = (budget) => {
    e_print.printBudget(budget, (error, result) => {
      if (error) {
        return console.log(error);
      }
      console.log(result);
    });
  };

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
      name: 'اﻹيراد الكلي',
      selector: (budget) => budget.currentAmount,
    },
    {
      name: 'المصروف الكلي',
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
    {
      name: 'طباعة',
      selector: (budget) => (
        <IonButton
          onClick={() => {
            handleBudgetPrint(budget);
          }}
          color="light"
        >
          <IonIcon slot="icon-only" icon={printOutline}></IonIcon>
        </IonButton>
      ),
    },
  ];

  return (
    <div className="budgets-table-container">
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
