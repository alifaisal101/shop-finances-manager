import {
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import './__PurchaseRecords.css';
import Header from '../../global/Header/Header';

import PurchaseRecordsTable from './../../components/containers/PurchaseRecordsTable/PurchaseRecordsTable';
import Content from '../../components/stateless/Content/Content';

import Model from './../../components/stateless/Model/Model';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';

const PurchaseRecords = () => {
  return (
    <IonPage>
      <Header title="قوائم الشركات" />
      <Content>
        <div className="action-button-container">
          <ActionButton>اضافة قائمة</ActionButton>
        </div>
        <PurchaseRecordsTable></PurchaseRecordsTable>
      </Content>
    </IonPage>
  );
};

export default PurchaseRecords;
