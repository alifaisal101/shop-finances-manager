import { IonContent, IonPage } from '@ionic/react';
import './__Earnings.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';
import EarningsTable from '../../components/containers/EarningsTable/EarningsTable';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';
import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal.store';

const Earnings = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const actionHandler = () => {
    setIsOpen(true);
  };
  return (
    <IonPage>
      <Header title="الإيرادات" />

      <Content className="page_content">
        <div className="action-button-container">
          <ActionButton onClick={actionHandler} color="primary">
            اضافة إيراد
          </ActionButton>
        </div>
        <EarningsTable></EarningsTable>
      </Content>
    </IonPage>
  );
};

export default Earnings;
