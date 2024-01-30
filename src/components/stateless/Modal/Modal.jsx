import './__Modal.css';
import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonInput,
} from '@ionic/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../store/modal.store';

const Modal = (props) => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const cancelHandler = () => {
    if (props.cancelHandler) {
      props.cancelHandler();
    }
    setIsOpen(false);
  };

  const confirmHandler = () => {
    if (props.confirmHandler) {
      props.confirmHandler();
    }
    setIsOpen(false);
  };

  return (
    <IonModal className="modal" isOpen={isOpen} onWillDismiss={cancelHandler}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={cancelHandler}>Cancel</IonButton>
          </IonButtons>
          <IonTitle>Welcome</IonTitle>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={confirmHandler}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput
            label="Enter your name"
            labelPlacement="stacked"
            type="text"
            placeholder="Your name"
          />
        </IonItem>
      </IonContent>
    </IonModal>
  );
};

export default Modal;
