import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonSearchbar,
} from '@ionic/react';

const Header = (props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle slot="end">{props.title}</IonTitle>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
