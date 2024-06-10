import { IonButton } from '@ionic/react';
import './__ActionButton.css';

const ActionButton = (props) => {
  return (
    <IonButton
      onClick={props.onClick}
      className={'action-btn ' + props.className}
      color={props.color || 'tertiary'}
      size={props.size || 'default'}
    >
      {props.children}
    </IonButton>
  );
};

export default ActionButton;
