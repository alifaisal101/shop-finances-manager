import { IonButton } from '@ionic/react';
import './__ActionButton.css';

const ActionButton = (props) => {
  return (
    <IonButton
      onClick={props.onClick}
      className={' ' + props.className}
      color={props.color || 'tertiary'}
    >
      {props.children}
    </IonButton>
  );
};

export default ActionButton;
