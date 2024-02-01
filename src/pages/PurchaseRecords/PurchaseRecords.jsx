import { IonPage } from '@ionic/react';
import './__PurchaseRecords.css';
import Header from '../../global/Header/Header';

import PurchaseRecordsTable from './../../components/containers/Tables/PurchaseRecordsTable/PurchaseRecordsTable';
import Content from '../../components/stateless/Content/Content';

import ActionButton from '../../components/stateless/ActionButton/ActionButton';
import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal.store';

const PurchaseRecords = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const actionHandler = () => {
    setIsOpen(true);
  };
  return (
    <IonPage>
      <Header title="قوائم الشركات" />
      <Content>
        <div className="action-button-container">
          <ActionButton onClick={actionHandler}>اضافة قائمة</ActionButton>
        </div>
        <PurchaseRecordsTable></PurchaseRecordsTable>
      </Content>
    </IonPage>
  );
};

export default PurchaseRecords;
