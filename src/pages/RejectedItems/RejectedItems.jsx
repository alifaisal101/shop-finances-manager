import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__RejectedItems.css';
import Header from '../../global/Header/Header';

const RejectedItems = () => {
  return (
    <IonPage>
      <Header title="السلع المرفوضة" />
      <IonContent></IonContent>
    </IonPage>
  );
};

export default RejectedItems;
