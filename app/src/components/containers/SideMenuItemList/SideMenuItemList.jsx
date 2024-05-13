import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuToggle,
} from '@ionic/react';
import { useState } from 'react';
import SubItem from '../../stateless/SubItem/SubItem';
import { chevronDownOutline, chevronForwardOutline } from 'ionicons/icons';

const SideMenuItemList = (props) => {
  let [expanded, setExpanded] = useState(false);
  //   let specialItemClass = appPage.isSpecialItem
  // ? ' global_sidemenu_specialItem '
  // : '';

  return (
    <IonMenuToggle autoHide={false}>
      <IonItem
        className={'global_sidemenu_item'}
        // routerLink={appPage.url}
        // routerDirection="none"
        lines="none"
        detail={false}
        button
        onClick={() => {
          setExpanded((_expanded) => !_expanded);
        }}
      >
        <IonIcon
          aria-hidden="true"
          slot="start"
          ios={props.appPage.iosIcon}
          md={props.appPage.mdIcon}
        />
        <IonIcon
          aria-hidden="true"
          slot="end"
          ios={expanded ? chevronDownOutline : chevronForwardOutline}
          md={expanded ? chevronDownOutline : chevronForwardOutline}
        />
        <IonLabel>{props.appPage.title}</IonLabel>
      </IonItem>
      <IonMenuToggle hidden={!expanded} autoHide={false}>
        <IonList>
          {props.appPage.subPages.map((subPage, i) => {
            return (
              <SubItem appPage={props.appPage} key={i} subPage={subPage} />
            );
          })}
        </IonList>
      </IonMenuToggle>
    </IonMenuToggle>
  );
};

export default SideMenuItemList;
