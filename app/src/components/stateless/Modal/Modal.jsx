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
import Content from '../Content/Content';

const Modal = (props) => {
  const { isOpen } = props;

  const cancelHandler = () => {
    if (props.cancelHandler) {
      props.cancelHandler();
    }
  };

  const confirmHandler = () => {
    if (props.confirmHandler) {
      props.confirmHandler();
    }
  };

  let modalClasses = 'modal';
  if (props?.size) {
    modalClasses += ` ${props.size}`;
  }

  if (props?.isOverlay) {
    modalClasses += ` overlay-modal`;
  }

  return (
    <IonModal
      className={modalClasses}
      isOpen={isOpen}
      onWillDismiss={cancelHandler}
    >
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
      <Content color={props.color} className="ion-padding">
        {props.children}
      </Content>
    </IonModal>
  );
};

export default Modal;
