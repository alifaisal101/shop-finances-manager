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
            <IonButton color="danger" fill="outline" onClick={cancelHandler}>
              {props.cancelText ? props.cancelText : 'الغاء'}
            </IonButton>
          </IonButtons>
          <IonTitle class="modal_title">{props.title}</IonTitle>
          <IonButtons slot="end">
            <IonButton
              strong={true}
              color="primary"
              fill="outline"
              onClick={confirmHandler}
            >
              {props.confirmText ? props.confirmText : 'حفظ'}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">{props.children}</IonContent>
    </IonModal>
  );
};

export default Modal;
