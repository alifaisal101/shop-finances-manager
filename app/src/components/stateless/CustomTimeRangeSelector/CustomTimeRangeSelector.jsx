import './__CustomTimeRangeSelector.css';
import React, { useEffect, useState } from 'react';
import {
  IonCol,
  IonDatetime,
  IonGrid,
  IonItem,
  IonLabel,
  IonModal,
  IonRange,
  IonRow,
} from '@ionic/react';
import Modal from '../Modal/Modal';
import { mapDateRangeToShiftTime } from '../../../util/date.functions';

const CustomTimeRangeSelector = (props) => {
  const { title, isOpen, onClose, cancelHandler, confirmText, cancelText } =
    props;

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const confirmHandler = () => {
    props.setValues(mapDateRangeToShiftTime(startTime, endTime));
  };

  useEffect(() => {
    if (startTime instanceof Date) {
      startTime.setHours(11);
      startTime.setMinutes(0);
      setStartTime(startTime.toISOString());
    }
    if (startTime instanceof Date) {
      endTime.setHours(19);
      endTime.setMinutes(0);
      setEndTime(endTime.toISOString());
    }
  }, []);

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      cancelHandler={cancelHandler}
      confirmHandler={confirmHandler}
      confirmText={confirmText}
      cancelText={cancelText}
      size={'medium'}
      isOverlay={true}
      className="custom-time-range-selector"
    >
      <IonGrid dir="rtl">
        <IonRow>
          <IonCol size="6">
            <IonLabel>بداية الوقت</IonLabel>

            <IonDatetime
              presentation="time"
              value={startTime}
              onIonChange={(e) => {
                setStartTime(e.target.value);
              }}
            ></IonDatetime>
          </IonCol>
          <IonCol size="6">
            <IonLabel position="floating">نهاية الوقت</IonLabel>

            <IonDatetime
              presentation="time"
              value={endTime}
              onIonChange={(e) => {
                setEndTime(e.target.value);
              }}
            ></IonDatetime>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Modal>
  );
};

export default CustomTimeRangeSelector;
