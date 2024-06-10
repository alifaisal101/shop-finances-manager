import { IonPage } from '@ionic/react';
import './__UserInterface.css';
import Header from '../../global/Header/Header';
import { useRecoilState } from 'recoil';
import { loginState } from '../../store/login.store';

const UserInterface = () => {
  const [loginData, setLoginData] = useRecoilState(loginState);

  return (
    <IonPage>
      <Header title="واجهة المستخدم" />
    </IonPage>
  );
};

export default UserInterface;
