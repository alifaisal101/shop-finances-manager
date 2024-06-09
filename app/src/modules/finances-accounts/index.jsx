import { IonPage, IonRouterOutlet } from '@ionic/react';
import CompaniesAccounts from './pages/CompaniesAccounts';
import PersonalAccounts from './pages/PersonalAccounts';
import { Route } from 'react-router-dom';

export default () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route path="/special-accounts">{PersonalAccounts}</Route>
        <Route path="/companies-accounts"> {CompaniesAccounts}</Route>
      </IonRouterOutlet>
    </IonPage>
  );
};
