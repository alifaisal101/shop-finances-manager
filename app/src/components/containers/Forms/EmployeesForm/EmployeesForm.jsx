import {
  IonButton,
  IonCol,
  IonDatetime,
  IonGrid,
  IonIcon,
  IonInput,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from '@ionic/react';
import { controlInput } from '../../../../util/state.functions';
import { displayDate } from '../../../../util/display.functions';

import './__EmployeesForm.css';
import { useState } from 'react';

const EmployeesForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    sex: '',
    phoneNumber: '',
    salary: null,
    payDate: new Date(),
  });
  return (
    <div className="employees-form-container form">
      <IonGrid>
        <IonRow className="form_row">
          <IonCol>
            <IonInput
              color="primary"
              label="أسم الموظف"
              labelPlacement="floating"
              placeholder="أدخل أسم الموظف"
              className="form_input"
            ></IonInput>
          </IonCol>
          <IonCol>
            <IonInput
              color="primary"
              label="رقم الهاتف"
              labelPlacement="floating"
              placeholder="أدخل رقم الهاتف"
              className="form_input"
            ></IonInput>
          </IonCol>
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
        </IonRow>
        <IonRow>
          <IonCol>
            <IonTitle className="form_title">موعد الراتب</IonTitle>
          </IonCol>
        </IonRow>
        <IonRow className="form_row">
          <IonCol>
            <IonDatetime
              className="form_month-picker"
              presentation="month"
              preferWheel={true}
            ></IonDatetime>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default EmployeesForm;
