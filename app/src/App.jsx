import './App.css';
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';

import { Redirect, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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

/* Fonts */
import './theme/fonts.css';

/* Theme variables */
import './theme/variables.css';

import SideMenu from './global/SideMenu/SideMenu';

import { useRecoilState } from 'recoil';
import { themeState } from './store/theme.store';

/* Modules */
import financesAccounts from './modules/finances-accounts';
import cashier from './modules/cashier';
import adminPanel from './modules/admin-panel';
import warehouses from './modules/warehouses';
import sells from './modules/sells';
import purchases from './modules/purchases';
import management from './modules/management';
import reports from './modules/reports';
import providers from './modules/providers';

import mainRoutes from './pages';
import React from 'react';

setupIonicReact();

function App() {
  const location = useLocation();
  const [themeToggle, setThemeToggle] = useRecoilState(themeState);
  document.body.classList.toggle('dark', themeToggle);

  return (
    <IonApp>
      <IonSplitPane contentId="main">
        <SideMenu />
        <IonRouterOutlet id="main" animated={true}>
          {adminPanel.map((route, index) =>
            React.cloneElement(route, { key: `adminPanel_${index}` })
          )}
          {cashier.map((route, index) =>
            React.cloneElement(route, { key: `cashier_${index}` })
          )}
          {warehouses.map((route, index) =>
            React.cloneElement(route, { key: `warehouses_${index}` })
          )}
          {sells.map((route, index) =>
            React.cloneElement(route, { key: `sells_${index}` })
          )}
          {purchases.map((route, index) =>
            React.cloneElement(route, { key: `purchases_${index}` })
          )}
          {management.map((route, index) =>
            React.cloneElement(route, { key: `management_${index}` })
          )}
          {providers.map((route, index) =>
            React.cloneElement(route, { key: `providers_${index}` })
          )}
          {financesAccounts.map((route, index) =>
            React.cloneElement(route, { key: `financesAccounts_${index}` })
          )}
          {reports.map((route, index) =>
            React.cloneElement(route, { key: `reports_${index}` })
          )}
          {mainRoutes.map((route, index) =>
            React.cloneElement(route, { key: `mainRoutes_${index}` })
          )}
        </IonRouterOutlet>
      </IonSplitPane>
    </IonApp>
  );
}

export default App;
