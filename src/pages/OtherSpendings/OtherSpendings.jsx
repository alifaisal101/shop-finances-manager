import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__OtherSpendings.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import OtherSpendingsTable from '../../components/containers/OtherSpendingsTable/OtherSpendingsTable';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';

const OtherSpendings = () => {
  return (
    <IonPage>
      <Header title="المصاريف الآخرى" />
      <Content className="page_content">
        <div className="action-button-container">
          <ActionButton color="warning">اضافة مصاريف اخرى</ActionButton>
        </div>
        <OtherSpendingsTable></OtherSpendingsTable>
      </Content>
    </IonPage>
  );
};

export default OtherSpendings;
