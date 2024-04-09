import './__Search.css';

import { useState, useRef, useEffect } from 'react';

import { filterOutline, searchOutline } from 'ionicons/icons';

import {
  IonButton,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonInput,
} from '@ionic/react';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((_isOpen) => !_isOpen);
  };
  return (
    <div className="search-container">
      <IonGrid>
        <IonRow className="form_row">
          <IonCol>
            <div className="search_main_input">
              <IonIcon icon={searchOutline} />
              <IonInput placeholder="رقم القائمة"></IonInput>
            </div>
          </IonCol>
        </IonRow>
        <IonRow className="search_buttons_row">
          <IonCol size="auto">
            <IonButton className="search_search_button">
              <IonIcon slot="icon-only" icon={searchOutline}></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol size="auto">
            <IonButton
              onClick={toggleAccordion}
              className="search_filter_button"
              color="medium"
            >
              <IonIcon slot="icon-only" icon={filterOutline}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
        <div className={`advanced-search ${isOpen ? 'open' : ''}`}>
          <IonRow>
            <IonCol>
              <IonInput placeholder="رقم القائمة"></IonInput>
            </IonCol>
            <IonCol>
              <div className="search_main_input">
                <IonInput placeholder="رقم القائمة"></IonInput>
              </div>
            </IonCol>
          </IonRow>
        </div>
      </IonGrid>
    </div>
  );
};

export default Search;
