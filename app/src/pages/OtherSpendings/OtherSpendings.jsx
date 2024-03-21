import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__OtherSpendings.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import OtherSpendingsTable from '../../components/containers/Tables/OtherSpendingsTable/OtherSpendingsTable';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';
import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal.store';

const OtherSpendings = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const actionHandler = () => {
    setIsOpen(true);
  };
  return (
    <IonPage>
      <Header title="المصاريف الآخرى" />
      <Content className="page_content">
        <div className="action-button-container">
          <ActionButton onClick={actionHandler} color="warning">
            اضافة مصاريف اخرى
          </ActionButton>
        </div>
        <OtherSpendingsTable></OtherSpendingsTable>
      </Content>
    </IonPage>
  );
};

export default OtherSpendings;
