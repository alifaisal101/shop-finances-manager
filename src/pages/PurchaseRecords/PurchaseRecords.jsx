import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__PurchaseRecords.css';
import Header from '../../global/Header/Header';

import PurchaseRecordsTable from './../../components/containers/PurchaseRecordsTable/PurchaseRecordsTable';
import Content from '../../components/stateless/Content/Content';

const PurchaseRecords = () => {
  return (
    <IonPage>
      <Header title="قوائم الشركات" />
      <Content>
        <PurchaseRecordsTable></PurchaseRecordsTable>
      </Content>
    </IonPage>
  );
};

export default PurchaseRecords;
