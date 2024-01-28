import { IonContent, IonPage } from '@ionic/react';
import './__Budget.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

const Budget = () => {
  return (
    <IonPage>
      <Header title="صندوق المال" />
      <Content className="page_content"></Content>
    </IonPage>
  );
};

export default Budget;
