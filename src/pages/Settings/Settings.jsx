import { IonPage } from '@ionic/react';
import './__Settings.css';
import Header from '../../global/Header/Header';
import React from 'react';
import {
  IonContent,
  IonItem,
  IonList,
  IonListHeader,
  IonToggle,
} from '@ionic/react';

const Settings = (props) => {
  // Add or remove the "dark" class on the document body

  return (
    <IonPage>
      <Header title="اﻹعدادات" />
      <IonContent>
        <IonListHeader>Appearance</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonToggle
              checked={props.theme == 'dark'}
              onIonChange={props.toggleTheme}
              justify="space-between"
            >
              Dark Mode
            </IonToggle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
