import { IonPage } from '@ionic/react';
import './__Settings.css';
import Header from '../../global/Header/Header';
import {
  IonContent,
  IonItem,
  IonList,
  IonListHeader,
  IonToggle,
} from '@ionic/react';
import { themeState } from '../../store/theme.store';
import { useRecoilState } from 'recoil';

const Settings = (props) => {
  // Add or remove the "dark" class on the document body
  const [themetoggle, setThemeToggle] = useRecoilState(themeState);

  return (
    <IonPage>
      <Header title="اﻹعدادات" />
      <IonContent className="page_content">
        <IonListHeader>Appearance</IonListHeader>
        <IonList inset={true}>
          <IonItem>
            <IonToggle
              checked={themetoggle}
              onIonChange={() => {
                setThemeToggle((_themeToggle) => !_themeToggle);
              }}
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
