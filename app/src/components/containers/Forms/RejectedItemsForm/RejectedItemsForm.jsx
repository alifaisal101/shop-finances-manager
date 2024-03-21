import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
} from '@ionic/react';

import './__RejectedItemsForm.css';
import { useState } from 'react';
import { displayDate } from '../../../../util/display.functions';

const RejectedItemsForm = () => {
  const [rejectedItem, setRejectedItem] = useState({
    purchaseRecord: {
      _id: null,
      number: null,
    },
    date: new Date(),
    price: null,
    desc: '',
  });
  return (
    <div className="rejected-items-form-container form">
      <IonGrid>
        <IonRow className="form_row">
          <IonCol>
            <IonInput
              color="primary"
              label="رقم القائمة التي تتبع اليها المواد المرفوضة"
              labelPlacement="floating"
              placeholder="أدخل رقم القائمة"
              className="form_input"
            ></IonInput>
          </IonCol>
          <IonCol>
            <IonInput
              color="primary"
              label="السعر"
              labelPlacement="floating"
              placeholder="أدخل السعر"
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
              type="date"
              value={displayDate(new Date())}
              className="form_input"
            ></IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonTextarea
              className="form_text-area"
              placeholder="أدخل الوصف أو السبب"
              autoGrow={true}
              value=""
            ></IonTextarea>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default RejectedItemsForm;
