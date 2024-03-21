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
import './__PurchaseRecordsForm.css';
import PaymentsRecordsData from '../PaymentsRecordsData/PaymentsRecordsData';
import { displayDate } from '../../../../util/display.functions';
import { Fragment, useState } from 'react';
import { addOutline } from 'ionicons/icons';
import { controlInput } from '../../../../util/state.functions';
import { useRecoilState } from 'recoil';
import { purchaseRecordStoreForm } from '../../../../store/purchaseRecords.store';

const PurchaseRecordsForm = (props) => {
  const [purchaseRecord, setPurchaseRecord] = useRecoilState(
    purchaseRecordStoreForm
  );

  const defaultPayment = {
    paymentAmount: null,
    paydate: new Date(),
  };
  const [payment, setPayment] = useState(defaultPayment);
  const handleAddPayment = () => {
    setPurchaseRecord((_purchaseRecord) => {
      const purchaseRecord = { ..._purchaseRecord };
      const payments = [...purchaseRecord.payments, payment];
      purchaseRecord.payments = payments;
      return purchaseRecord;
    });

    setPayment(defaultPayment);
  };

  return (
    <div className="purchase-records-form-container form">
      <IonGrid>
        <IonRow className="form_row">
          <IonCol>
            <IonInput
              color="primary"
              label="رقم القائمة"
              labelPlacement="floating"
              placeholder="أدخل رقم القائمة"
              className="form_input"
              value={purchaseRecord.recordNumber}
              onIonChange={(e) => {
                controlInput(e, 'recordNumber', setPurchaseRecord);
              }}
            ></IonInput>
          </IonCol>
          <IonCol>
            <IonInput
              color="primary"
              label="الشركة"
              labelPlacement="floating"
              placeholder="أدخل اسم الشركة"
              className="form_input"
              value={purchaseRecord.company}
              onIonChange={(e) => {
                controlInput(e, 'company', setPurchaseRecord);
              }}
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
              value={purchaseRecord.paymentType}
              onIonChange={(e) => {
                controlInput(e, 'paymentType', setPurchaseRecord);
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
              value={purchaseRecord.totalCost}
              onIonChange={(e) => {
                controlInput(e, 'totalCost', setPurchaseRecord);
              }}
            ></IonInput>
          </IonCol>
          <IonCol>
            <IonInput
              label="التاريخ"
              labelPlacement="stacked"
              placeholder="أدخل تاريخ القائمة"
              type="date"
              value={displayDate(purchaseRecord.date)}
              className="form_input"
              onIonChange={(e) => {
                e.target.value = new Date(e.target.value);
                controlInput(e, 'date', setPurchaseRecord);
              }}
            ></IonInput>
          </IonCol>
        </IonRow>

        {purchaseRecord.paymentType === 'indirect' ? (
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
                  placeholder="أدخل  الدفعة"
                  className="form_input"
                  type="number"
                  step="1000"
                  max={1000000000}
                  min={0}
                  value={payment.paymentAmount}
                  onIonChange={(e) => {
                    controlInput(e, 'paymentAmount', setPayment);
                  }}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonInput
                  label="التاريخ"
                  labelPlacement="stacked"
                  placeholder="أدخل تاريخ القائمة"
                  type="date"
                  value={displayDate(payment.paydate)}
                  className="form_input"
                  onIonChange={(e) => {
                    e.target.value = new Date(e.target.value);
                    controlInput(e, 'paydate', setPayment);
                  }}
                ></IonInput>
              </IonCol>
              <IonCol size="auto" className="form_addbtn-container">
                <IonButton shape="circle" onClick={handleAddPayment}>
                  <IonIcon slot="icon-only" icon={addOutline}></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow className="form_row">
              <IonCol>
                <PaymentsRecordsData
                  pagination={false}
                  data={{ payments: purchaseRecord.payments }}
                ></PaymentsRecordsData>
              </IonCol>
            </IonRow>
          </Fragment>
        ) : null}
      </IonGrid>
    </div>
  );
};

export default PurchaseRecordsForm;
