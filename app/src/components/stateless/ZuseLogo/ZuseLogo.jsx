import { IonCol, IonGrid, IonRow } from '@ionic/react';
import './__ZuseLogo.css';

const ZuseLogo = (props) => {
  return (
    <IonGrid>
      <IonRow className="ion-align-items-center">
        <IonCol size="12" className="ion-text-center">
          <img
            src="/src/assets/images/zuse-server-logo-small.png"
            alt="Company Logo"
            className={'company-logo ' + props.size}
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ZuseLogo;
