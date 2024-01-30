import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__RejectedItems.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

import RejectedItemsTable from './../../components/containers/RejectedItemsTable/RejectedItems';

const RejectedItems = () => {
  return (
    <IonPage>
      <Header title="المواد المرفوضة" />
      <Content className="page_content">
        <RejectedItemsTable></RejectedItemsTable>
      </Content>
    </IonPage>
  );
};

export default RejectedItems;
