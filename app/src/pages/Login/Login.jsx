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
  IonSpinner,
} from '@ionic/react';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import ZuseLogo from '../../components/stateless/ZuseLogo/ZuseLogo';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';
import { useRecoilState } from 'recoil';
import { loginState } from '../../store/forms/login.store';
import { loginApiRequest } from '../../api-requests/auth';
import LoadingDots from '../../components/stateless/LoadingDots/LoadingDots';
import ErrMsg from '../../components/stateless/ErrMsg/ErrMsg';
import { userState } from '../../store/app/users.store';
import { roleState } from '../../store/app/roles.store';
import { tokenState } from '../../store/app/token.store';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { storeToken } from '../../ipc-requests/auth';

const Login = () => {
  const [loginData, setLoginData] = useRecoilState(loginState);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [user, setUser] = useRecoilState(userState);
  const [role, setRole] = useRecoilState(roleState);
  const [token, setToken] = useRecoilState(tokenState);
  const [tokenCookie, setTokenCookie] = useCookies(['token']);

  const handleLogin = async () => {
    // Calls the validation functions on the username and password.
    setLoginData((_loginData) => {
      return {
        ..._loginData,
        username: {
          ..._loginData.username,
          ..._loginData.username.validate(_loginData.username.value),
        },
        password: {
          ..._loginData.password,
          ..._loginData.password.validate(_loginData.password.value),
        },
      };
    });

    if (loginData.password.valid && loginData.username.valid) {
      // display a loading cursor
      setLoading(true);

      // Login request
      const result = await loginApiRequest(
        loginData.username.value,
        loginData.password.value
      );

      // login failed
      if (!result.loggedIn) {
        setTimeout(() => setLoading(false), 250);
        return setErrorMsg(result.message);
      }

      // login successful:
      // -> store the new permissions, role, token and user data
      // await loginAction({user, setUser}, {role, setRole}, token, {persistance: false});
      setUser({
        username: result.response.username,
        roleId: result.response.roleId,
        phoneNumber: result.response.phoneNumber
          ? result.response.phoneNumber
          : null,
        fullName: result.response.fullName
          ? result.response.fullName
          : result.response.fullName,
        workShift: result.response.workShift
          ? result.response.workShift
          : result.response.workShift,
        photoUrl: result.response.photoUrl
          ? result.response.photoUrl
          : result.response.photoUrl,
        notes: result.response.notes
          ? result.response.notes
          : result.response.notes,
        isLoggedIn: true,
      });

      setToken(result.response.token);
      setRole({
        role: result.response.role.role,
        description: result.response.role.description
          ? result.response.role.description
          : null,
        permissions: result.response.role.permissions,
      });

      storeToken(result.response.token);
    }
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

  if (user.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
      <Header title="تسجيل الدخول" />
      <Content className="page_content">
        <ZuseLogo size="medium"></ZuseLogo>

        {loading ? (
          <LoadingDots></LoadingDots>
        ) : (
          <IonGrid>
            <IonRow className="ion-align-items-center ion-margin-bottom">
              <IonCol size="6">
                <IonItem className="ion-margin-bottom">
                  <IonLabel position="floating">إسم المستخدم</IonLabel>
                  <IonInput
                    onIonInput={(e) => {
                      if (!e.target.value) return;
                      e.target.value = e.target.value.trim();
                      setLoginData((_loginData) => {
                        return {
                          ..._loginData,
                          username: {
                            ..._loginData.username,
                            ..._loginData.username.validate(e.target.value),
                            value: e.target.value.trim(),
                          },
                        };
                      });
                    }}
                    value={loginData.username.value}
                  ></IonInput>
                  {!loginData.username.valid && loginData.username.error ? (
                    <span className="input_error-msg">
                      {loginData.username.error}
                    </span>
                  ) : null}
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">كلمة السر</IonLabel>
                  <IonInput
                    type="password"
                    onIonInput={(e) => {
                      if (!e.target.value) return;
                      e.target.value = e.target.value.trim();
                      setLoginData((_loginData) => {
                        return {
                          ..._loginData,
                          password: {
                            ..._loginData.password,
                            ..._loginData.password.validate(e.target.value),
                            value: e.target.value.trim(),
                          },
                        };
                      });
                    }}
                    value={loginData.password.value}
                  ></IonInput>
                  {!loginData.password.valid && loginData.password.error ? (
                    <span className="input_error-msg">
                      {loginData.password.error}
                    </span>
                  ) : null}
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow class="ion-align-items-center">
              <IonCol class="ion-align-items-center ion-text-center" size="4">
                <ActionButton
                  size="large"
                  color="primary"
                  onClick={handleLogin}
                >
                  تسجيل الدخول
                </ActionButton>
              </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center ion-margin-top">
              <ErrMsg>{errorMsg}</ErrMsg>
            </IonRow>
          </IonGrid>
        )}
      </Content>
    </IonPage>
  );
};

export default Login;
