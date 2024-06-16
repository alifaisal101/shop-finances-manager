import { IonCol, IonGrid, IonRow, IonSpinner } from '@ionic/react';
import './__LoadingDots.css';

const LoadingDots = () => {
  return (
    <IonGrid>
      <IonRow className="ion-align-items-center">
        <IonCol size="12" className="ion-text-center">
          <IonSpinner color="dark" className="loading-dots" name="dots" />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default LoadingDots;
