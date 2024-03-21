import './__Content.css';
import { IonContent } from '@ionic/react';

const Content = (props) => {
  return (
    <IonContent className={'content ion-padding ' + props.className}>
      {props.children}
      <div className="nothing"></div>
    </IonContent>
  );
};

export default Content;
