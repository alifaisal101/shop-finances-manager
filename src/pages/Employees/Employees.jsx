import { IonContent, IonPage } from '@ionic/react';
import './__Employees.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import EmployeesTable from '../../components/containers/EmployeesTable/EmployeesTable';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';

const Employees = () => {
  return (
    <IonPage>
      <Header title="الموظفين" />

      <Content className="page_content">
        <div className="action-button-container">
          <ActionButton color="success">اضافة موظف</ActionButton>
        </div>
        <EmployeesTable></EmployeesTable>
      </Content>
    </IonPage>
  );
};

export default Employees;
