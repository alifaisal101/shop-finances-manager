import {
  IonButton,
  IonCol,
  IonDatetime,
  IonDatetimeButton,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from '@ionic/react';
import './__PurchaseRecordsForm.css';
import { useLocation } from 'react-router-dom';
import PaymentsRecordsData from '../PaymentsRecordsData/PaymentsRecordsData';
import { displayDate } from '../../../../util/display.functions';
import { Fragment } from 'react';
import { addOutline } from 'ionicons/icons';

const PurchaseRecordsForm = () => {
  const location = useLocation();

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
            ></IonInput>
          </IonCol>
          <IonCol>
            <IonInput
              color="primary"
              label="الشركة"
              labelPlacement="floating"
              placeholder="أدخل اسم الشركة"
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
        </IonRow>

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
      </IonGrid>
    </div>
  );
};

export default PurchaseRecordsForm;
