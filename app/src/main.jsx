import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RecoilRoot } from 'recoil';
import { IonReactRouter } from '@ionic/react-router';

try {
  // Replacing the alert and confirm function with new ones, fixing the input focus issue
  alert = e_util.alert;
  confirm = e_util.confirm;
  window.config = e_util?.getConfig();
} catch (err) {
  console.log(err);
}

// console.log(window.config);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </RecoilRoot>
);

postMessage({ payload: 'removeLoading' }, '*');
