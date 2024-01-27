import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__PurchaseRecords.css';
import Header from '../../global/Header/Header';

import PurchaseRecordsTable from './../../components/containers/PurchaseRecordsTable/PurchaseRecordsTable';

const PurchaseRecords = () => {
  return (
    <IonPage>
      <Header title="قوائم الشركات" />
      <IonContent className="page_content">
        <PurchaseRecordsTable></PurchaseRecordsTable>
      </IonContent>
    </IonPage>
  );
};

export default PurchaseRecords;
