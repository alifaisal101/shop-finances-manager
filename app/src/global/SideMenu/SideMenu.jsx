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
import {
  businessOutline,
  receiptOutline,
  warningOutline,
  peopleOutline,
  briefcaseOutline,
  cashOutline,
  cartOutline,
  cogOutline,
  pieChartOutline,
  cardOutline,
} from 'ionicons/icons';
import './__SideMenu.css';

const appPages = [
  {
    title: 'الشركات',
    url: '/companies',
    iosIcon: businessOutline,
    mdIcon: businessOutline,
  },
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
    title: 'الاشتراكات',
    url: '/subscriptions',
    iosIcon: cardOutline,
    mdIcon: cardOutline,
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
  {
    title: 'المخططات البيانية',
    url: '/dashboard',
    iosIcon: pieChartOutline,
    mdIcon: pieChartOutline,
  },
  {
    title: 'اﻹعدادات',
    url: '/settings',
    iosIcon: cogOutline,
    mdIcon: cogOutline,
  },
];

const SideMenu = () => {
  const location = useLocation();

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
            let selectedClass =
              location.pathname === appPage.url ? 'selected' : '';

            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={selectedClass + ' global_sidemenu_item'}
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
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
