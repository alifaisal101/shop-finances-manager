import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './__RejectedItems.css';
import Header from '../../global/Header/Header';
import Content from '../../components/stateless/Content/Content';

import RejectedItemsTable from './../../components/containers/Tables/RejectedItemsTable/RejectedItems';
import ActionButton from '../../components/stateless/ActionButton/ActionButton';
import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal.store';

const RejectedItems = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const actionHandler = () => {
    setIsOpen(true);
  };
  return (
    <IonPage>
      <Header title="المواد المرفوضة" />
      <Content className="page_content">
        <div className="action-button-container">
          <ActionButton onClick={actionHandler} color="danger">
            اضافة مواد مرفوضة
          </ActionButton>
        </div>
        <RejectedItemsTable></RejectedItemsTable>
      </Content>
    </IonPage>
  );
};

export default RejectedItems;
