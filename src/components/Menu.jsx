import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import {
  bookmarkOutline,
  receiptOutline,
  warningOutline,
  peopleOutline,
  briefcaseOutline,
  cashOutline,
  cartOutline
} from 'ionicons/icons';
import './Menu.css';

const appPages = [
  {
    title: 'قوائم الشركات',
    url: '/purchase-records',
    iosIcon: receiptOutline,
    mdIcon: receiptOutline,
  },
  {
    title: 'المواد المرفوضة',
    url: '/rejected-items',
    iosIcon: warningOutline,
    mdIcon: warningOutline,
  },
  {
    title: 'المصاريف الاَخرى',
    url: '/other-spendings',
    iosIcon: cartOutline,
    mdIcon: cartOutline,
  },
  {
    title: 'الموظفين',
    url: '/employees',
    iosIcon: peopleOutline,
    mdIcon: peopleOutline,
  },
  {
    title: 'صندوق المال',
    url: '/budget',
    iosIcon: briefcaseOutline,
    mdIcon: briefcaseOutline,
  },
  {
    title: 'الإيرادات',
    url: '/earnings',
    iosIcon: cashOutline,
    mdIcon: cashOutline,
  },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" side="right">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>text</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
