import { IonContent, IonPage } from '@ionic/react';
import './__Employees.css';
import Header from '../../global/Header/Header';

const Employees = () => {
  return (
    <IonPage>
      <Header title="الموظفين" />

      <IonContent className="page_content"></IonContent>
    </IonPage>
  );
};

export default Employees;
