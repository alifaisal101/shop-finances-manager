import React, { useState } from 'react';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonButtons,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonList,
  IonRange,
  IonDatetime,
} from '@ionic/react';
import Content from '../../../../../../components/stateless/Content/Content';
import Modal from '../../../../../../components/stateless/Modal/Modal';
import { convertMilitaryToArabicTime } from '../../../../../../util/display.functions';
import CustomTimeRangeSelector from '../../../../../../components/stateless/CustomTimeRangeSelector/CustomTimeRangeSelector';
import UsersFormTable from '../../tables/FormTables/UsersFormTable/UsersFormTable';
import ActionButton from '../../../../../../components/stateless/ActionButton/ActionButton';

const UsersFormModal = (props) => {
  const {
    title,
    isOpen,
    onClose,
    cancelHandler,
    confirmHandler,
    confirmText,
    cancelText,
  } = props;
  const [showTimeSelectorModal, setShowTimeSelectorModal] = useState(false);

  const [users, setUsers] = useState([]);
  const initialUserState = {
    username: '',
    fullName: '',
    phoneNumber: '',
    password: '',
    cPassword: '',
    sex: '',
    shift: '',
  };
  const [user, setUser] = useState(initialUserState);

  const shiftTimeHandler = (shiftTime) => {
    setUser((_user) => {
      return { ..._user, shift: shiftTime };
    });
  };

  const shiftTimeRangeHandler = (e) => {
    if (!e?.target?.value) return;

    if (e.target.value === 'custom') {
      // Show custom time selector model
      setShowTimeSelectorModal(true);
      e.target.value += '1';
    }

    shiftTimeHandler(e.target.value);
  };

  const addUserHandler = () => {
    setUsers((users) => [...users, user]);
    setUser(initialUserState);
  };

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      cancelHandler={cancelHandler}
      confirmHandler={confirmHandler}
      confirmText={confirmText}
      cancelText={cancelText}
    >
      <IonGrid dir="rtl">
        <IonRow className="">
          <IonCol>
            <IonItem className="" dir="ltr">
              <IonLabel position="floating">إسم المستخدم</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem className="">
              <IonLabel dir="ltr" position="floating">
                الأسم الكامل
              </IonLabel>
              <IonInput value={user.fullName}></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem className="" dir="ltr">
              <IonLabel dir="ltr" position="floating">
                رقم الهاتف
              </IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow className="">
          <IonCol>
            <IonItem className="" dir="ltr">
              <IonLabel dir="ltr" position="floating">
                كلمة السر
              </IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem className="" dir="ltr">
              <IonLabel dir="ltr" position="floating">
                تأكيد كلمة السر
              </IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow className="">
          <IonCol>
            <IonSelect
              aria-label="جنس المتسخدم"
              interface="popover"
              placeholder="جنس المتسخدم"
              className="form_input"
            >
              <IonSelectOption value="male">ذكر</IonSelectOption>
              <IonSelectOption value="female">أنثى</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect
              aria-label="أوقات العمل"
              interface="popover"
              placeholder="أوقات العمل"
              className="form_input"
              onIonChange={shiftTimeRangeHandler}
            >
              {['0800-1600', '1600-0800', '0000-0800'].map((time, i) => (
                <IonSelectOption
                  key={i}
                  value={time}
                  className="shift-select-option"
                >
                  {convertMilitaryToArabicTime(time)}
                </IonSelectOption>
              ))}
              <IonSelectOption value={'custom'}>اختيار مخصص</IonSelectOption>
            </IonSelect>
            {/* Modal for custom time range */}
            <CustomTimeRangeSelector
              isOpen={showTimeSelectorModal}
              cancelHandler={() => {
                setShowTimeSelectorModal(false);
              }}
              setValues={shiftTimeHandler}
            ></CustomTimeRangeSelector>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-align-items-center ion-text-center">
            <ActionButton onClick={addUserHandler} size="large">
              اضافة
            </ActionButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <UsersFormTable data={users}></UsersFormTable>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Modal>
  );
};

export default UsersFormModal;
