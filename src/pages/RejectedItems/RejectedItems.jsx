import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__RejectedItems.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

const RejectedItems = () => {
  return (
    <IonPage>
      <Header title="المواد المرفوضة" />
      <Content className="page_content"></Content>
    </IonPage>
  );
};

export default RejectedItems;
