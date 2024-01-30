import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__RejectedItems.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

import RejectedItemsTable from './../../components/containers/RejectedItemsTable/RejectedItems';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';

const RejectedItems = () => {
  return (
    <IonPage>
      <Header title="المواد المرفوضة" />
      <Content className="page_content">
        <div className="action-button-container">
          <ActionButton color="danger">اضافة مواد مرفوضة</ActionButton>
        </div>
        <RejectedItemsTable></RejectedItemsTable>
      </Content>
    </IonPage>
  );
};

export default RejectedItems;
