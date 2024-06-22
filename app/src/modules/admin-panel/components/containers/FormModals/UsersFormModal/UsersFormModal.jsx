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

  const shiftTimeRangeHandler = (e) => {
    console.log(e);
    if (!e?.target?.value) return;

    if (e.target.value === 'custom') {
      // Show custom time selector model
      setShowTimeSelectorModal(true);
      e.target.value += '1';
    }
  };

  const shiftTimeHandler = (shiftTime) => {
    console.log('SHIFT TIME WILL BE ', shiftTime);
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
              <IonInput></IonInput>
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
              aria-label="نوع الدفع"
              interface="popover"
              placeholder="جنس الموظف"
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
      </IonGrid>
    </Modal>
  );
};

export default UsersFormModal;

// <IonModal isOpen={showCustomModal}>
// <IonLabel>اختيار مدة العمل</IonLabel>
// <IonButton onClick={() => setShowCustomModal(false)}>
//   إغلاق
// </IonButton>
// {/* Add your custom component for selecting hour and minute range here */}
// {/* For example, you can create a TimeRangePicker component */}
// {/* <TimeRangePicker /> */}
// <IonList>
//   <IonItem>
//     <IonLabel>Start Time</IonLabel>
//     <IonRange min={0} max={24} step={1} snaps={true} />
//   </IonItem>
//   <IonItem>
//     <IonLabel>End Time</IonLabel>
//     <IonRange min={0} max={24} step={1} snaps={true} />
//   </IonItem>
// </IonList>
// </IonModal>
