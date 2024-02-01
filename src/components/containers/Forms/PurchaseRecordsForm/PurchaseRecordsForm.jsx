import { IonInput, IonItem, IonList } from '@ionic/react';
import './__PurchaseRecordsForm.css';
import { useLocation } from 'react-router-dom';

const PurchaseRecordsForm = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div className="purchase-records-form-container">
      <IonInput
        color="primary"
        label="رقم القائمة"
        labelPlacement="floating"
        placeholder="أدخل رقم القائمة"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
      <IonInput
        color="primary"
        label="رقم القائمة"
        labelPlacement="floating"
        placeholder="أدخل رقم القائمة"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>{' '}
      <IonInput
        color="primary"
        label="رقم القائمة"
        labelPlacement="floating"
        placeholder="أدخل رقم القائمة"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
      <IonInput
        label="Floating label"
        labelPlacement="floating"
        placeholder="Enter text"
      ></IonInput>
    </div>
  );
};

export default PurchaseRecordsForm;
