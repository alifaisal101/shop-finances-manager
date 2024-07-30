import './App.css';
import '@ionic/react/css/core.css';
import { IonCol, IonGrid, IonRow, setupIonicReact } from '@ionic/react';
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
import React, { Fragment, useEffect, useState } from 'react';
import { tokenState } from './store/app/token.store';
import { userState } from './store/app/users.store';
import { useCookies } from 'react-cookie';
import { isCookieExpired } from './util/cookie.functions';
import { validateTokenApiRequest } from './api-requests/auth';
import { roleState } from './store/app/roles.store';
import LoadingDots from './components/stateless/LoadingDots/LoadingDots';

setupIonicReact();

function App() {
  const location = useLocation();
  const [themeToggle, setThemeToggle] = useRecoilState(themeState);
  const [user, setUser] = useRecoilState(userState);
  const [role, setRole] = useRecoilState(roleState);
  const [token, setToken] = useRecoilState(tokenState);
  const [tokenCookie, setTokenCookie] = useCookies(['token']);
  const [loading, setLoading] = useState(false);

  document.body.classList.toggle('dark', themeToggle);

  // TEMP DISABLE FOR DEV
  const redirectToLogin = location.pathname == '/' && !user.isLoggedIn;

  // useEffect(() => {
  //   setLoading(true);
  //   const validateTokenCookie = async () => {
  //     if (
  //       tokenCookie?.token?.value &&
  //       tokenCookie?.token?.expiresIn &&
  //       tokenCookie?.token?.createdAt
  //     ) {
  //       if (
  //         isCookieExpired(
  //           tokenCookie.token.createdAt,
  //           tokenCookie.token.expiresIn
  //         )
  //       ) {
  //         setLoading(true);

  //         setTokenCookie('token', null);
  //       } else {
  //         const result = await validateTokenApiRequest(tokenCookie.token.value);

  //         if (
  //           result?.isValid &&
  //           result?.response?.role._id &&
  //           result?.response?._id
  //         ) {
  //           setUser({
  //             username: result.response.username,
  //             roleId: result.response.roleId,
  //             phoneNumber: result.response.phoneNumber
  //               ? result.response.phoneNumber
  //               : null,
  //             fullName: result.response.fullName
  //               ? result.response.fullName
  //               : result.response.fullName,
  //             workShift: result.response.workShift
  //               ? result.response.workShift
  //               : result.response.workShift,
  //             photoUrl: result.response.photoUrl
  //               ? result.response.photoUrl
  //               : result.response.photoUrl,
  //             notes: result.response.notes
  //               ? result.response.notes
  //               : result.response.notes,
  //             isLoggedIn: true,
  //           });

  //           setToken({
  //             value: tokenCookie.token.value,
  //             expiresIn: tokenCookie.token.expiresIn,
  //           });
  //           setRole({
  //             role: result.response.role.role,
  //             description: result.response.role.description
  //               ? result.response.role.description
  //               : null,
  //             permissions: result.response.role.permissions,
  //           });
  //         } else {
  //           setTokenCookie('token', null);
  //         }
  //       }
  //     }
  //     setTimeout(() => setLoading(false), 500);
  //   };
  //   validateTokenCookie();
  // }, []);

  return (
    <IonApp>
      {loading ? (
        <IonGrid style={{ height: '100vh' }}>
          <IonRow
            className="ion-justify-content-center ion-align-items-center"
            style={{ height: '100%' }}
          >
            <IonCol size="auto">
              <LoadingDots />
            </IonCol>
          </IonRow>
        </IonGrid>
      ) : (
        <IonSplitPane contentId="main">
          <SideMenu />
          <IonRouterOutlet id="main" animated={true}>
            {redirectToLogin ? (
              <Redirect to="/login"></Redirect>
            ) : (
              <Fragment>
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
                  React.cloneElement(route, {
                    key: `financesAccounts_${index}`,
                  })
                )}
                {reports.map((route, index) =>
                  React.cloneElement(route, { key: `reports_${index}` })
                )}
                {mainRoutes.map((route, index) =>
                  React.cloneElement(route, { key: `mainRoutes_${index}` })
                )}
              </Fragment>
            )}
          </IonRouterOutlet>
        </IonSplitPane>
      )}
    </IonApp>
  );
}

export default App;
