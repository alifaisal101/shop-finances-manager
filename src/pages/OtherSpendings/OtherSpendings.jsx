import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__OtherSpendings.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import OtherSpendingsTable from '../../components/containers/OtherSpendingsTable/OtherSpendingsTable';

const OtherSpendings = () => {
  return (
    <IonPage>
      <Header title="المصاريف الآخرى" />
      <Content className="page_content">
        <OtherSpendingsTable></OtherSpendingsTable>
      </Content>
    </IonPage>
  );
};

export default OtherSpendings;
