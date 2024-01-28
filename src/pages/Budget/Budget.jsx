import { IonContent, IonPage } from '@ionic/react';
import './__Budget.css';
import Header from '../../global/Header/Header';

const Budget = () => {
  return (
    <IonPage>
      <Header title="صندوق المال" />
      <IonContent className="page_content"></IonContent>
    </IonPage>
  );
};

export default Budget;
