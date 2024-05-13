import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import './__SideMenu.css';
import { useState } from 'react';
import appPages from './side-menu-items';
import SubItem from '../../components/stateless/SubItem/SubItem';
import SideMenuItemList from '../../components/containers/SideMenuItemList/SideMenuItemList';

const SideMenu = () => {
  return (
    <IonMenu
      contentId="main"
      type="overlay"
      side="end"
      className="global_sidemenu"
    >
      <IonContent>
        <IonList className="side-menu_items-list" id="inbox-list">
          {appPages.map((appPage, index) => {
            if (appPage.subPages?.length > 0) {
              return <SideMenuItemList appPage={appPage} key={index} />;
            }
            return <SubItem key={index} subPage={appPage} />;
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
