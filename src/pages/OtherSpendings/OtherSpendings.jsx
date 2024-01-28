import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__OtherSpendings.css';
import Header from '../../global/Header/Header';

const OtherSpendings = () => {
  return (
    <IonPage>
      <Header title="المصاريف الآخرى" />
      <IonContent className="page_content"></IonContent>
    </IonPage>
  );
};

export default OtherSpendings;
