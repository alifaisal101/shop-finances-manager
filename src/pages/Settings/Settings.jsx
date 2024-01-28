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
import Content from '../../components/stateless/Content/Content';

const Settings = (props) => {
  // Add or remove the "dark" class on the document body
  const [themetoggle, setThemeToggle] = useRecoilState(themeState);

  return (
    <IonPage>
      <Header title="اﻹعدادات" />
      <Content className="page_content">
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
      </Content>
    </IonPage>
  );
};

export default Settings;
