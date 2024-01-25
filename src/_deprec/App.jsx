import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonButton,
  setupIonicReact,
} from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App = () => {
  return (
    <RecoilRoot>
      <IonApp>
        {/* <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect to="/folder/Inbox" />
              </Route>
              <Route path="/folder/:name" exact={true}>
                <Page />
              </Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter> */}
        <IonHeader>
          <IonToolbar color="danger">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonSegment>
            <IonSegmentButton value="mkg">
              <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
              <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <IonItem>
            <IonLabel position="floating">Weight (Kg.)</IonLabel>
            <IonInput type="number" id="weight"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Height (cm.)</IonLabel>
            <IonInput type="number" id="height"></IonInput>
          </IonItem>
          <IonGrid className="ion-margin-top" id="result">
            <IonRow>
              <IonCol>
                <IonButton color="success">
                  <IonIcon slot="start" icon={calculatorOutline} />
                  Calculate
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton fill="outline" id="resetBtn" color="danger">
                  <IonIcon slot="start" icon={refreshOutline} />
                  Reset
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <div>
            <IonTitle class="ion-margin-top" id="result">
              100
            </IonTitle>
          </div>
        </IonContent>
      </IonApp>
    </RecoilRoot>
  );
};

export default App;
