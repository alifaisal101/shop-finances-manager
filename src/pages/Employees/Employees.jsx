import { IonContent, IonPage } from '@ionic/react';
import './__Employees.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import EmployeesTable from '../../components/containers/EmployeesTable/EmployeesTable';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';
import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal.store';

const Employees = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const actionHandler = () => {
    setIsOpen(true);
  };
  return (
    <IonPage>
      <Header title="الموظفين" />

      <Content className="page_content">
        <div className="action-button-container">
          <ActionButton onClick={actionHandler} color="success">
            اضافة موظف
          </ActionButton>
        </div>
        <EmployeesTable></EmployeesTable>
      </Content>
    </IonPage>
  );
};

export default Employees;
