import { IonInput, IonItem, IonList } from '@ionic/react';
import './__PurchaseRecordsForm.css';
import { useLocation } from 'react-router-dom';

const PurchaseRecordsForm = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div className="purchase-records-form-container">
      <IonList>
        <IonItem>
          <IonInput
            label="رقم القائمة"
            labelPlacement="floating"
            placeholder="Enter text"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            label="Floating label"
            labelPlacement="floating"
            placeholder="Enter text"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            label="Floating label"
            labelPlacement="floating"
            placeholder="Enter text"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            label="Floating label"
            labelPlacement="floating"
            placeholder="Enter text"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            label="Floating label"
            labelPlacement="floating"
            placeholder="Enter text"
          ></IonInput>
        </IonItem>
      </IonList>
    </div>
  );
};

export default PurchaseRecordsForm;
