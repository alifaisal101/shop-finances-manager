import { IonContent, IonPage } from '@ionic/react';
import './__Earnings.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

const Earnings = () => {
  return (
    <IonPage>
      <Header title="الإيرادات" />

      <Content className="page_content"></Content>
    </IonPage>
  );
};

export default Earnings;
