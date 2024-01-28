import { IonContent, IonPage } from '@ionic/react';
import './__Earnings.css';
import Header from '../../global/Header/Header';

const Earnings = () => {
  return (
    <IonPage>
      <Header title="الإيرادات" />

      <IonContent className="page_content"></IonContent>
    </IonPage>
  );
};

export default Earnings;
