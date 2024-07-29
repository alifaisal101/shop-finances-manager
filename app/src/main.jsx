import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RecoilRoot } from 'recoil';
import { IonReactRouter } from '@ionic/react-router';
// import errorsLocaleAr from './locales/ar/errors.json';
// export const locale = {
//   errors: {
//     ar: errorsLocaleAr,
//   },
// };

export const locale = {};
try {
  // Replacing the alert and confirm function with new ones, fixing the input focus issue
  alert = e_util.alert;
  confirm = e_util.confirm;
  window.config = e_util?.getConfig();
} catch (err) {
  console.log(err);
}
// FOR DEVELOPMENT IN BROWSER
if (!window.config?.API_URL) {
  window.config = {
    API_URL: 'http://localhost:3000',
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </RecoilRoot>
);

postMessage({ payload: 'removeLoading' }, '*');
