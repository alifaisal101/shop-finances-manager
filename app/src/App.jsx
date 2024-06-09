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

/* Pages */
import PurchaseRecords from './pages/PurchaseRecords/PurchaseRecords';
import RejectedItems from './pages/RejectedItems/RejectedItems';
import OtherSpendings from './pages/OtherSpendings/OtherSpendings';
import Employees from './pages/Employees/Employees';
import Budget from './pages/Budget/Budget';
import Earnings from './pages/Earnings/Earnings';
import Settings from './pages/Settings/Settings';

import { useRecoilState } from 'recoil';
import { themeState } from './store/theme.store';
import Modal from './components/stateless/Modal/Modal';
import PurchaseRecordsForm from './components/containers/Forms/PurchaseRecordsForm/PurchaseRecordsForm';
import RejectedItemsForm from './components/containers/Forms/RejectedItemsForm/RejectedItemsForm';
import OtherSpendingsForm from './components/containers/Forms/OtherSpendingsForm/OtherSpendingsForm';
import EmployeesForm from './components/containers/Forms/EmployeesForm/EmployeesForm';
import EarningsForm from './components/containers/Forms/EarningsForm/EarningsForm';
import {
  purchaseRecordStoreForm,
  purchaseRecordStoreFormDefault,
  purchaseRecordsStore,
} from './store/purchaseRecords.store';
import { budgetStore } from './store/budgets.store';
import { budgets } from './preset-data';
import { displayDate } from './util/display.functions';
import Dashboard from './pages/Dashboard/Dashboard';
import Companies from './pages/Companies/Companies';
import Subscriptions from './pages/Subscriptions/Subscriptions';
import Login from './pages/Login/Login';
import financesAccounts from './modules/finances-accounts';

setupIonicReact();

function App() {
  const location = useLocation();
  console.log(location);
  const [themetoggle, setThemeToggle] = useRecoilState(themeState);
  document.body.classList.toggle('dark', themetoggle);

  // return (
  //   <IonApp>
  //     <IonSplitPane contentId="main">
  //       <SideMenu />
  //       <IonRouterOutlet id="main" animated={true}>
  //         <Route path="/companies" exact={true}>
  //           <Companies />
  //         </Route>
  //         <Route path="/" exact={true}>
  //           <Redirect to="/purchase-records" />
  //         </Route>
  //         <Route path="/purchase-records" exact={true}>
  //           <PurchaseRecords />
  //         </Route>
  //         <Route path="/rejected-items" exact={true}>
  //           <RejectedItems />
  //         </Route>
  //         <Route path="/subscriptions" exact={true}>
  //           <Subscriptions />
  //         </Route>
  //         <Route path="/other-spendings" exact={true}>
  //           <OtherSpendings />
  //         </Route>
  //         <Route path="/employees" exact={true}>
  //           <Employees />
  //         </Route>
  //         <Route path="/budget" exact={true}>
  //           <Budget />
  //         </Route>
  //         <Route path="/earnings" exact={true}>
  //           <Earnings />
  //         </Route>
  //         <Route path="/dashboard" exact={true}>
  //           <Dashboard />
  //         </Route>
  //         <Route path="/settings" exact={true}>
  //           <Settings />
  //         </Route>
  //       </IonRouterOutlet>
  //     </IonSplitPane>
  //   </IonApp>
  // );

  return (
    <IonApp>
      <IonSplitPane contentId="main">
        <SideMenu />
        <IonRouterOutlet id="main" animated={true}>
          <Route path="/finances-accounts" component={financesAccounts} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonApp>
  );
}

export default App;
