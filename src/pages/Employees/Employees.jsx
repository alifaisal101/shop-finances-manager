import { IonContent, IonPage } from '@ionic/react';
import './__Employees.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import EmployeesTable from '../../components/containers/EmployeesTable/EmployeesTable';

const Employees = () => {
  return (
    <IonPage>
      <Header title="الموظفين" />

      <Content className="page_content">
        <EmployeesTable></EmployeesTable>
      </Content>
    </IonPage>
  );
};

export default Employees;
