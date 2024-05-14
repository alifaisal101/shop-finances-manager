import './__Login.css';

import React, { useState } from 'react';
import {
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonPage,
} from '@ionic/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Example: You might want to send a request to your backend for authentication
  };

  return (
    <IonPage>
      <IonContent>
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
      </IonContent>
    </IonPage>
  );
};

export default Login;
