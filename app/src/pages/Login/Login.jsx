import './__Login.css';

import React, { useState } from 'react';
import {
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import ZuseLogo from '../../components/stateless/ZuseLogo/ZuseLogo';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // Implement your login logic here
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  //   // Example: You might want to send a request to your backend for authentication
  // };

  return (
    <IonPage>
      <Header title="تسجيل الدخول" />
      <Content className="page_content">
        <ZuseLogo size="medium"></ZuseLogo>

        <IonGrid>
          <IonRow className="ion-align-items-center ion-margin-bottom">
            <IonCol size="6">
              <IonItem className="ion-margin-bottom">
                <IonLabel position="floating">إسم المستخدم</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">كلمة السر</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow class="ion-align-items-center">
            <IonCol class="ion-align-items-center ion-text-center" size="4">
              <ActionButton size="large" color="primary">
                تسجيل الدخول
              </ActionButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </Content>

      {/* <IonContent>
        <form onSubmit={handleLogin}>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.default.value)}
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.default.value)}
              required
            />
          </IonItem>
          <IonButton expand="full" type="submit">
            Login
          </IonButton>
        </form>
      </IonContent> */}
    </IonPage>
  );
};

export default Login;
