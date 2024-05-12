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
  chevronDownOutline,
  chevronForwardOutline,
  personCircleOutline,
} from 'ionicons/icons';
import './__SideMenu.css';
import { useState } from 'react';

const appPages = [
  {
    isSpecialItem: true,
    title: 'لوحة الادمن',
    url: '/admin-panel',
    iosIcon: personCircleOutline,
    mdIcon: personCircleOutline,
    subPages: [
      {
        url: '/users',
        title: 'المستخدمين',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/users',
        title: 'الأدوار',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/logs',
        title: 'السجل',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/database',
        title: 'إعدادات قاعدة البيانات',
      },
      {
        url: '/database',
        title: 'العلامات التجارية',
      },
    ],
  },
  {
    title: 'الكاشير',
    url: '/companies',
    iosIcon: businessOutline,
    mdIcon: businessOutline,
    subPages: [
      {
        url: '/sells',
        title: 'واجهة البيع',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/refund',
        title: 'إعادة مال',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'إعادة سلعة',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
    ],
  },
  {
    title: 'المخازن',
    url: '/companies',
    iosIcon: businessOutline,
    mdIcon: businessOutline,
    subPages: [
      {
        url: '/refund',
        title: 'المخازن',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/sells',
        title: 'المواد',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'نقل بين مخازن',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'المواد المستهلكة',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'المواد التالفة',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'طباعة باركود',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'إدخال مواد',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'إخراج مواد',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
    ],
  },
  {
    title: 'المخازن',
    url: '/companies',
    iosIcon: businessOutline,
    mdIcon: businessOutline,
    subPages: [
      {
        url: '/refund',
        title: 'المخازن',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/sells',
        title: 'المواد',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/sells',
        title: 'الفئات',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'نقل بين مخازن',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'المواد المستهلكة',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'المواد التالفة',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'طباعة باركود',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'إدخال مواد',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/returns',
        title: 'إخراج مواد',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
    ],
  },
  {
    title: 'مبيعات',
    url: '/purchase-records',
    iosIcon: receiptOutline,
    mdIcon: receiptOutline,
    subPages: [
      {
        url: '/sells',
        title: 'قائمة بيع',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/sells',
        title: 'تعديل بيع',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/sells',
        title: 'إرجاع بيع',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/sells',
        title: 'تعديل إرجاع بيع',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
    ],
  },
  {
    title: 'مشتريات',
    url: '/purchase-records',
    iosIcon: receiptOutline,
    mdIcon: receiptOutline,
    subPages: [
      {
        url: '/sells',
        title: 'قائمة شراء',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/sells',
        title: 'تعديل قائمة شراء',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/sells',
        title: 'إرجاع شراء',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/sells',
        title: 'تعديل إرجاع شراء',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
    ],
  },
  {
    title: 'المزودين',
    url: '/purchase-records',
    iosIcon: receiptOutline,
    mdIcon: receiptOutline,
    subPages: [
      {
        url: '/sells',
        title: 'الشركات',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/sells',
        title: 'المندوبين',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
    ],
  },
  {
    title: 'الادارة',
    url: '/purchase-records',
    iosIcon: receiptOutline,
    mdIcon: receiptOutline,
    subPages: [
      {
        title: 'الموظفين',
        url: '/employees',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
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
    ],
  },
  {
    title: 'الحسابات',
    url: '/purchase-records',
    iosIcon: receiptOutline,
    mdIcon: receiptOutline,
    subPages: [
      {
        title: 'الحسابات الخاصة',
        url: '/employees',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
      {
        title: 'حسابات الشركات',
        url: '/employees',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
      {
        title: 'حسابات الزبائن',
        url: '/employees',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
    ],
  },
  {
    title: 'التقارير',
    url: '/purchase-records',
    iosIcon: receiptOutline,
    mdIcon: receiptOutline,
    subPages: [
      {
        title: 'تقارير المبيعات',
        url: '/employees',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
      {
        title: 'تقارير المخازن',
        url: '/employees',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
      {
        title: 'التقارير المالية',
        url: '/employees',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
      {
        title: 'تقارير المستخدمين',
        url: '/employees',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
      {
        title: 'تقارير المزودين',
        url: '/employees',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
    ],
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
            let [expanded, setExpanded] = useState(false);
            let specialItemClass = appPage.isSpecialItem
              ? ' global_sidemenu_specialItem '
              : '';

            if (appPage.subPages?.length > 0) {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                    className={
                      selectedClass + specialItemClass + ' global_sidemenu_item'
                    }
                    routerLink={appPage.url}
                    routerDirection="none"
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
                      ios={appPage.iosIcon}
                      md={appPage.mdIcon}
                    />
                    <IonIcon
                      aria-hidden="true"
                      slot="end"
                      ios={
                        expanded ? chevronDownOutline : chevronForwardOutline
                      }
                      md={expanded ? chevronDownOutline : chevronForwardOutline}
                    />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                  <IonMenuToggle hidden={!expanded} autoHide={false}>
                    <IonList>
                      {appPage.subPages.map((subPage) => {
                        return (
                          <IonItem
                            className={selectedClass + ' global_sidemenu_item'}
                          >
                            <IonLabel>{subPage.title}</IonLabel>
                          </IonItem>
                        );
                      })}
                    </IonList>
                  </IonMenuToggle>
                </IonMenuToggle>
              );
            }
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
