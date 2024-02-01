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

import './__OtherSpendingsForm.css';
import { Fragment, useState } from 'react';
import { displayDate } from '../../../../util/display.functions';
import PaymentsRecordsData from '../PaymentsRecordsData/PaymentsRecordsData';
import { controlInput } from '../../../../util/state.functions';
import { addOutline } from 'ionicons/icons';

const OtherSpendingsForm = (props) => {
  const [otherSpending, setOtherSpending] = useState({
    title: '',
    paymentType: null,
    totalCost: null,
    date: new Date(),
    payments: [],
  });
  return (
    <div className="other-speanding-form-container form">
      <IonGrid>
        <IonRow className="form_row">
          <IonCol>
            <IonInput
              color="primary"
              label="العنوان"
              labelPlacement="floating"
              placeholder="أدخل العنوان"
              className="form_input"
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
        <IonRow className="form_row">
          <IonCol>
            <IonSelect
              aria-label="نوع الدفع"
              interface="popover"
              placeholder="حدد نوع الدفع"
              className="form_input"
              value={otherSpending.paymentType}
              onIonChange={(e) => {
                controlInput(e, 'paymentType', setOtherSpending);
              }}
            >
              <IonSelectOption value="direct">نقد</IonSelectOption>
              <IonSelectOption value="indirect">أجل</IonSelectOption>
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonInput
              label="الكلفة الكلية"
              labelPlacement="floating"
              placeholder="أدخل الكلفة الكلية"
              className="form_input"
              type="number"
              step="1000"
              max={1000000000}
              min={0}
            ></IonInput>
          </IonCol>
        </IonRow>
        {otherSpending.paymentType === 'indirect' ? (
          <Fragment>
            <IonRow>
              <IonCol>
                <IonTitle class="form_title">اضافة الدفعات</IonTitle>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonInput
                  label="الدفعة"
                  labelPlacement="floating"
                  placeholder="أدخل الكلفة الكلية"
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
                  placeholder="أدخل تاريخ القائمة"
                  type="date"
                  value={displayDate(new Date())}
                  className="form_input"
                ></IonInput>
              </IonCol>
              <IonCol size="auto" className="form_addbtn-container">
                <IonButton shape="circle">
                  <IonIcon slot="icon-only" icon={addOutline}></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow className="form_row">
              <IonCol>
                <PaymentsRecordsData
                  pagination={false}
                  data={{ payments: [] }}
                ></PaymentsRecordsData>
              </IonCol>
            </IonRow>
          </Fragment>
        ) : null}
      </IonGrid>
    </div>
  );
};

export default OtherSpendingsForm;
