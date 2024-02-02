import { IonButton, IonIcon } from '@ionic/react';
import './__EditBtnTable.css';
import { createOutline } from 'ionicons/icons';

const EditBtnTable = (props) => {
  return (
    <IonButton shape="clear" onClick={props.onClick} color="primary">
      <IonIcon icon={createOutline} slot="icon-only"></IonIcon>
    </IonButton>
  );
};

export default EditBtnTable;
