import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from '@ionic/react';

import './__EarningsForm.css';
import { useLocation } from 'react-router-dom';
import { displayDate } from '../../../../util/display.functions';
import { useState } from 'react';

const EarningsForm = () => {
  const earningId = useLocation();

  const [earning, setEarning] = useState({
    date: new Date(),
    amount: null,
  });
  return (
    <div className="earnings-form-container form">
      <IonGrid>
        <IonRow className="form_row">
          <IonCol>
            <IonInput
              label="اﻹيراد"
              labelPlacement="floating"
              placeholder="أدخل اﻹيراد الكلي"
              className="form_input"
              type="number"
              step="1000"
              max={1000000000}
              min={0}
            ></IonInput>
          </IonCol>
          <IonCol>
            <IonInput
              label="التاريخ"
              labelPlacement="stacked"
              placeholder="أدخل تاريخ"
              type="date"
              value={displayDate(new Date())}
              className="form_input"
            ></IonInput>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default EarningsForm;
