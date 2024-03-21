import { IonContent, IonPage } from '@ionic/react';
import './__Budget.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import BudgetsTable from '../../components/containers/Tables/BudgetsTable/BudgetsTable';

const Budget = () => {
  return (
    <IonPage>
      <Header title="صندوق المال" />
      <Content className="page_content">
        <BudgetsTable></BudgetsTable>
      </Content>
    </IonPage>
  );
};

export default Budget;
