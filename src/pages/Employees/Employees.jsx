import { IonContent, IonPage } from '@ionic/react';
import './__Employees.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

const Employees = () => {
  return (
    <IonPage>
      <Header title="الموظفين" />

      <Content className="page_content"></Content>
    </IonPage>
  );
};

export default Employees;
