import { IonContent, IonPage } from '@ionic/react';
import './__Earnings.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import EarningsTable from '../../components/containers/EarningsTable/EarningsTable';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';

const Earnings = () => {
  return (
    <IonPage>
      <Header title="الإيرادات" />

      <Content className="page_content">
        <div className="action-button-container">
          <ActionButton color="primary">اضافة إيراد</ActionButton>
        </div>
        <EarningsTable></EarningsTable>
      </Content>
    </IonPage>
  );
};

export default Earnings;
