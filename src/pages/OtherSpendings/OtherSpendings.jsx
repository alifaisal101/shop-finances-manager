import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__OtherSpendings.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

const OtherSpendings = () => {
  return (
    <IonPage>
      <Header title="المصاريف الآخرى" />
      <Content className="page_content"></Content>
    </IonPage>
  );
};

export default OtherSpendings;
