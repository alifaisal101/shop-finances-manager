import { IonButton, IonIcon } from '@ionic/react';
import './__DeleteBtnTable.css';
import { closeCircleOutline } from 'ionicons/icons';

const DeleteBtnTable = (props) => {
  return (
    <IonButton shape="clear" onClick={props.onClick} color="danger">
      <IonIcon icon={closeCircleOutline} slot="icon-only"></IonIcon>
    </IonButton>
  );
};

export default DeleteBtnTable;
