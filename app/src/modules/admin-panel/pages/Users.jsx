import { IonCol, IonGrid, IonPage, IonRow } from '@ionic/react';
import Header from '../../../global/Header/Header';
import Content from '../../../components/stateless/Content/Content';
import SearchUsers from '../components/containers/searchers/SearchUsers/SearchUsers';
import UsersTable from '../components/containers/tables/UsersTable/UsersTable';
import ActionButton from '../../../components/stateless/ActionButton/ActionButton';
import { useState } from 'react';
import UsersFormModal from '../components/containers/FormModals/UsersFormModal/UsersFormModal';

const Users = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <Header title={'المستخدمين'}></Header>
      <Content className="page_content">
        <SearchUsers></SearchUsers>
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="12" className="ion-text-center">
              <ActionButton
                color="primary"
                size="large"
                onClick={() => setShowModal(true)}
              >
                انشاء مستخدمين
              </ActionButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <UsersFormModal
          cancelHandler={() => setShowModal(false)}
          isOpen={showModal}
        ></UsersFormModal>
        <UsersTable></UsersTable>
      </Content>
    </IonPage>
  );
};

export default Users;
