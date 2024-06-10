import './__Login.css';

import { useEffect, useState } from 'react';
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
import { useRecoilState } from 'recoil';
import { loginState } from '../../store/login.store';

const Login = () => {
  const [loginData, setLoginData] = useRecoilState(loginState);

  const handleLogin = () => {
    validate(loginData);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleLogin();
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the component mounts

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
                <IonInput
                  onIonInput={(e) => {
                    if (!e.target.value) return;
                    setLoginData((_loginData) => {
                      return {
                        ..._loginData,
                        username: {
                          ..._loginData.username,
                          ..._loginData.username.validate(e.target.value),
                          value: e.target.value,
                        },
                      };
                    });
                  }}
                  value={loginData.username.value}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">كلمة السر</IonLabel>
                <IonInput
                  type="password"
                  onIonInput={(e) => {
                    if (!e.target.value) return;

                    setLoginData((_loginData) => {
                      return {
                        ..._loginData,
                        password: {
                          value: e.target.value,
                          ..._loginData.password,
                        },
                      };
                    });
                  }}
                  value={loginData.password.value}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow class="ion-align-items-center">
            <IonCol class="ion-align-items-center ion-text-center" size="4">
              <ActionButton size="large" color="primary" onClick={handleLogin}>
                تسجيل الدخول
              </ActionButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </Content>
    </IonPage>
  );
};

export default Login;
