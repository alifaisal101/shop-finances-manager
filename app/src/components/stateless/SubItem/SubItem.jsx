import { useLocation } from 'react-router-dom';

import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import './__SubItem.css';

const SubItem = (props) => {
  const location = useLocation();
  let route;
  if (props?.appPage?.url) {
    route = props.appPage.url + props.subPage.url;
  } else {
    route = props.subPage.url;
  }

  let selectedClass = location.pathname === route ? 'selected' : '';

  return (
    <IonItem
      className={selectedClass + ' global_sidemenu_item'}
      routerLink={route}
      routerDirection="none"
      lines="none"
      detail={false}
    >
      <IonIcon
        aria-hidden="true"
        slot="start"
        ios={props.subPage.iosIcon}
        md={props.subPage.mdIcon}
      />
      <IonLabel>{props.subPage.title}</IonLabel>
    </IonItem>
  );
};

export default SubItem;
