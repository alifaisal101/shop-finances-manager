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
  alertCircleOutline,
  trashBinOutline,
  peopleOutline,
  cashOutline,
  cartOutline,
  cogOutline,
  basketOutline,
  documentOutline,
  cardOutline,
  serverOutline,
  chevronDownOutline,
  chevronForwardOutline,
  personCircleOutline,
  briefcaseOutline,
  tvOutline,
  homeOutline,
  fastFoodOutline,
  moveOutline,
  barcodeOutline,
  bagAddOutline,
  bagRemoveOutline,
  createOutline,
  returnUpForward,
  storefrontOutline,
  personOutline,
  copyOutline,
  fileTrayFullOutline,
  fileTrayStackedOutline,
  pieChartOutline,
  brushOutline,
  statsChartOutline,
  peopleCircleOutline,
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
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
      {
        url: '/roles',
        title: 'الأدوار',
        iosIcon: briefcaseOutline,
        mdIcon: briefcaseOutline,
      },
      {
        url: '/logs',
        title: 'السجل',
        iosIcon: documentOutline,
        mdIcon: documentOutline,
      },
      {
        url: '/database',
        title: 'إعدادات قاعدة البيانات',
        iosIcon: serverOutline,
        mdIcon: serverOutline,
      },
      {
        url: '/trademarks',
        title: 'العلامات التجارية',
        iosIcon: businessOutline,
        mdIcon: businessOutline,
      },
      {
        url: '/app-settings',
        title: 'إعدادات النظام',
        iosIcon: cogOutline,
        mdIcon: cogOutline,
      },
    ],
  },
  {
    title: 'الكاشير',
    url: '/cashier',
    iosIcon: cartOutline,
    mdIcon: cartOutline,
    subPages: [
      {
        url: '/pos',
        title: 'واجهة البيع',
        iosIcon: tvOutline,
        mdIcon: tvOutline,
      },
      {
        url: '/refund',
        title: 'إعادة مال',
        iosIcon: cashOutline,
        mdIcon: cashOutline,
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
    url: '/warehouses',
    iosIcon: homeOutline,
    mdIcon: homeOutline,
    subPages: [
      {
        url: '/warehouses',
        title: 'المخازن',
        iosIcon: homeOutline,
        mdIcon: homeOutline,
      },
      {
        url: '/items',
        title: 'المواد',
        iosIcon: fastFoodOutline,
        mdIcon: fastFoodOutline,
      },
      {
        url: '/move-items',
        title: 'نقل بين مخازن',
        iosIcon: moveOutline,
        mdIcon: moveOutline,
      },
      {
        url: '/empty-items',
        title: 'المواد المستهلكة',
        iosIcon: alertCircleOutline,
        mdIcon: alertCircleOutline,
      },
      {
        url: '/expired-items',
        title: 'المواد التالفة',
        iosIcon: trashBinOutline,
        mdIcon: trashBinOutline,
      },
      {
        url: '/print-barcode',
        title: 'طباعة باركود',
        iosIcon: barcodeOutline,
        mdIcon: barcodeOutline,
      },
      {
        url: '/add-items',
        title: 'إدخال مواد',
        iosIcon: bagAddOutline,
        mdIcon: bagAddOutline,
      },
      {
        url: '/remove-items',
        title: 'إخراج مواد',
        iosIcon: bagRemoveOutline,
        mdIcon: bagRemoveOutline,
      },
    ],
  },
  {
    title: 'مبيعات',
    url: '/sells',
    iosIcon: cardOutline,
    mdIcon: cardOutline,
    subPages: [
      {
        url: '/records',
        title: 'قوائم البيع',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/modify-record',
        title: 'تعديل بيع',
        iosIcon: createOutline,
        mdIcon: createOutline,
      },
      {
        url: '/return-sell',
        title: 'إرجاع بيع',
        iosIcon: returnUpForward,
        mdIcon: returnUpForward,
      },
      {
        url: '/modify-return-sell',
        title: 'تعديل إرجاع بيع',
        iosIcon: createOutline,
        mdIcon: createOutline,
      },
    ],
  },
  {
    title: 'مشتريات',
    url: '/purchases',
    iosIcon: basketOutline,
    mdIcon: basketOutline,
    subPages: [
      {
        url: '/records',
        title: 'قائمة شراء',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        url: '/modify-record',
        title: 'تعديل قائمة شراء',
        iosIcon: createOutline,
        mdIcon: createOutline,
      },
      {
        url: '/return-purchase',
        title: 'إرجاع شراء',
        iosIcon: returnUpForward,
        mdIcon: returnUpForward,
      },
      {
        url: '/modify-return-purchase',
        title: 'تعديل إرجاع شراء',
        iosIcon: createOutline,
        mdIcon: createOutline,
      },
    ],
  },
  {
    title: 'المزودين',
    url: '/providers',
    iosIcon: storefrontOutline,
    mdIcon: storefrontOutline,
    subPages: [
      {
        url: '/companies',
        title: 'الشركات',
        iosIcon: businessOutline,
        mdIcon: businessOutline,
      },
      {
        url: '/delegates',
        title: 'المندوبين',
        iosIcon: personOutline,
        mdIcon: personOutline,
      },
    ],
  },
  {
    title: 'الادارة',
    url: '/management',
    iosIcon: copyOutline,
    mdIcon: copyOutline,
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
    url: '/finances-accounts',
    iosIcon: fileTrayStackedOutline,
    mdIcon: fileTrayStackedOutline,
    subPages: [
      {
        title: 'الحسابات الخاصة',
        url: '/special-accounts',
        iosIcon: fileTrayFullOutline,
        mdIcon: fileTrayFullOutline,
      },
      {
        title: 'حسابات الشركات',
        url: '/companies-accounts',
        iosIcon: businessOutline,
        mdIcon: businessOutline,
      },
      {
        title: 'حسابات الزبائن',
        url: '/employees-accounts',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
    ],
  },
  {
    title: 'التقارير',
    url: '/reports',
    iosIcon: statsChartOutline,
    mdIcon: statsChartOutline,
    subPages: [
      {
        title: 'تقارير المبيعات',
        url: '/sells-reports',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
      },
      {
        title: 'تقارير المخازن',
        url: '/warehouse-reports',
        iosIcon: homeOutline,
        mdIcon: homeOutline,
      },
      {
        title: 'التقارير المالية',
        url: '/finances-reports',
        iosIcon: cashOutline,
        mdIcon: cashOutline,
      },
      {
        title: 'تقارير المستخدمين',
        url: '/users-reports',
        iosIcon: peopleCircleOutline,
        mdIcon: peopleCircleOutline,
      },
      {
        title: 'تقارير المزودين',
        url: '/providers-reports ',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
      },
    ],
  },
  {
    title: 'المخططات البيانية',
    url: '/charts-data',
    iosIcon: pieChartOutline,
    mdIcon: pieChartOutline,
  },
  {
    title: 'واجهة المستخدم',
    url: '/interface-settings',
    iosIcon: brushOutline,
    mdIcon: brushOutline,
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
                        console.log(appPage.url + subPage.url);
                        return (
                          <IonItem
                            className={selectedClass + ' global_sidemenu_item'}
                          >
                            <IonIcon
                              aria-hidden="true"
                              slot="start"
                              ios={subPage.iosIcon}
                              md={subPage.mdIcon}
                            />
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
