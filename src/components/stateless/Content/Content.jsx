import './__Content.css';
import { IonContent } from '@ionic/react';

const Content = (props) => {
  return (
    <IonContent className={'content ion-padding ' + props.className}>
      {props.children}
    </IonContent>
  );
};

export default Content;
