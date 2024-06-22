import './__Content.css';
import { IonContent } from '@ionic/react';

const Content = (props) => {
  return (
    <IonContent
      color={props.color}
      className={'content ion-padding ' + props.className}
    >
      {props.children}
      <div className="nothing"></div>
    </IonContent>
  );
};

export default Content;
