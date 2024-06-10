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
  informationCircleOutline,
  keyOutline,
} from 'ionicons/icons';
import { routesPermissions } from '../../routes-permissions';

const appPages = [
  {
    title: 'تسجيل الدخول',
    url: '/login',
    iosIcon: keyOutline,
    mdIcon: keyOutline,
  },
  {
    isSpecialItem: true,
    title: 'لوحة الادمن',
    url: '/admin-panel',
    iosIcon: personCircleOutline,
    mdIcon: personCircleOutline,
    permissions: routesPermissions['/admin-panel'].permissions,
    subPages: [
      {
        url: '/users',
        title: 'المستخدمين',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
        permissions:
          routesPermissions['/admin-panel'].subPages['/users'].permissions,
      },
      {
        url: '/roles',
        title: 'الأدوار',
        iosIcon: briefcaseOutline,
        mdIcon: briefcaseOutline,
        permissions:
          routesPermissions['/admin-panel'].subPages['/roles'].permissions,
      },

      {
        url: '/logs',
        title: 'السجل',
        iosIcon: documentOutline,
        mdIcon: documentOutline,
        permissions:
          routesPermissions['/admin-panel'].subPages['/logs'].permissions,
      },
      {
        url: '/database',
        title: 'إعدادات قاعدة البيانات',
        iosIcon: serverOutline,
        mdIcon: serverOutline,
        permissions:
          routesPermissions['/admin-panel'].subPages['/database'].permissions,
      },
      {
        url: '/trademarks',
        title: 'العلامات التجارية',
        iosIcon: businessOutline,
        mdIcon: businessOutline,
        permissions:
          routesPermissions['/admin-panel'].subPages['/trademarks'].permissions,
      },
      {
        url: '/app-settings',
        title: 'إعدادات النظام',
        iosIcon: cogOutline,
        mdIcon: cogOutline,
        permissions:
          routesPermissions['/admin-panel'].subPages['/app-settings']
            .permissions,
      },
    ],
  },
  {
    title: 'الكاشير',
    url: '/cashier',
    iosIcon: cartOutline,
    mdIcon: cartOutline,
    permissions: routesPermissions['/cashier'].permissions,

    subPages: [
      {
        url: '/pos',
        title: 'واجهة البيع POS',
        iosIcon: tvOutline,
        mdIcon: tvOutline,
        permissions: routesPermissions['/cashier'].subPages['/pos'].permissions,
      },
      {
        url: '/refund',
        title: 'إرجاع مال',
        iosIcon: cashOutline,
        mdIcon: cashOutline,
        permissions:
          routesPermissions['/cashier'].subPages['/refund'].permissions,
      },
      {
        url: '/returns',
        title: 'إرجاع سلعة',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
        permissions:
          routesPermissions['/cashier'].subPages['/returns'].permissions,
      },
    ],
  },
  {
    title: 'المخازن',
    url: '/warehouses',
    iosIcon: homeOutline,
    mdIcon: homeOutline,
    permissions: routesPermissions['/warehouses'].permissions,
    subPages: [
      {
        url: '/warehouses',
        title: 'المخازن',
        iosIcon: homeOutline,
        mdIcon: homeOutline,
        permissions: routesPermissions['/warehouses'].subPages['/warehouses'],
      },
      {
        url: '/items',
        title: 'المواد',
        iosIcon: fastFoodOutline,
        mdIcon: fastFoodOutline,
        permissions: routesPermissions['/warehouses'].subPages['/items'],
      },
      {
        url: '/move-items',
        title: 'نقل بين مخازن',
        iosIcon: moveOutline,
        mdIcon: moveOutline,
        permissions: routesPermissions['/warehouses'].subPages['/move-items'],
      },
      {
        url: '/empty-items',
        title: 'المواد المستهلكة',
        iosIcon: alertCircleOutline,
        mdIcon: alertCircleOutline,
        permissions: routesPermissions['/warehouses'].subPages['/empty-items'],
      },
      {
        url: '/expired-items',
        title: 'المواد التالفة',
        iosIcon: trashBinOutline,
        mdIcon: trashBinOutline,
        permissions:
          routesPermissions['/warehouses'].subPages['/expired-items'],
      },
      {
        url: '/print-barcode',
        title: 'طباعة باركود',
        iosIcon: barcodeOutline,
        mdIcon: barcodeOutline,
        permissions:
          routesPermissions['/warehouses'].subPages['/print-barcode'],
      },
      {
        url: '/add-items',
        title: 'إدخال مواد',
        iosIcon: bagAddOutline,
        mdIcon: bagAddOutline,
        permissions: routesPermissions['/warehouses'].subPages['/add-items'],
      },
      {
        url: '/remove-items',
        title: 'إخراج مواد',
        iosIcon: bagRemoveOutline,
        mdIcon: bagRemoveOutline,
        permissions: routesPermissions['/warehouses'].subPages['/remove-items'],
      },
    ],
  },
  {
    title: 'مبيعات',
    url: '/sells',
    iosIcon: cardOutline,
    mdIcon: cardOutline,
    permissions: routesPermissions['/sells'].permissions,
    subPages: [
      {
        url: '/records',
        title: 'قوائم البيع',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
        permissions:
          routesPermissions['/sells'].subPages['/records'].permissions,
      },
      {
        url: '/modify-record',
        title: 'تعديل بيع',
        iosIcon: createOutline,
        mdIcon: createOutline,
        permissions:
          routesPermissions['/sells'].subPages['/modify-record'].permissions,
      },
      {
        url: '/refunds',
        title: 'إرجاع مال',
        iosIcon: cashOutline,
        mdIcon: cashOutline,
        permissions:
          routesPermissions['/sells'].subPages['/refunds'].permissions,
      },
      {
        url: '/modify-refunds',
        title: 'تعديل إرجاع مال',
        iosIcon: createOutline,
        mdIcon: createOutline,
        permissions:
          routesPermissions['/sells'].subPages['/modify-refunds'].permissions,
      },
      {
        url: '/return-sell',
        title: 'إرجاع بيع',
        iosIcon: returnUpForward,
        mdIcon: returnUpForward,
        permissions:
          routesPermissions['/sells'].subPages['/return-sell'].permissions,
      },
      {
        url: '/modify-return-sell',
        title: 'تعديل إرجاع بيع',
        iosIcon: createOutline,
        mdIcon: createOutline,
        permissions:
          routesPermissions['/sells'].subPages['/modify-return-sell']
            .permissions,
      },
    ],
  },
  {
    title: 'مشتريات',
    url: '/purchases',
    iosIcon: basketOutline,
    mdIcon: basketOutline,
    permissions: routesPermissions['/purchases'].permissions,

    subPages: [
      {
        url: '/records',
        title: 'قائمة شراء',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
        permissions: routesPermissions['/purchases'].subPages['/records'],
      },
      {
        url: '/modify-record',
        title: 'تعديل قائمة شراء',
        iosIcon: createOutline,
        mdIcon: createOutline,
        permissions: routesPermissions['/purchases'].subPages['/modify-record'],
      },
      {
        url: '/return-purchase',
        title: 'إرجاع شراء',
        iosIcon: returnUpForward,
        mdIcon: returnUpForward,
        permissions:
          routesPermissions['/purchases'].subPages['/return-purchase'],
      },
      {
        url: '/modify-return-purchase',
        title: 'تعديل إرجاع شراء',
        iosIcon: createOutline,
        mdIcon: createOutline,
        permissions:
          routesPermissions['/purchases'].subPages['/modify-return-purchase'],
      },
    ],
  },
  {
    title: 'المزودين',
    url: '/providers',
    iosIcon: storefrontOutline,
    mdIcon: storefrontOutline,
    permissions: routesPermissions['/providers'].permissions,

    subPages: [
      {
        url: '/companies',
        title: 'الشركات',
        iosIcon: businessOutline,
        mdIcon: businessOutline,
        permissions:
          routesPermissions['/providers'].subPages['/companies'].permissions,
      },
      {
        url: '/delegates',
        title: 'المندوبين',
        iosIcon: personOutline,
        mdIcon: personOutline,
        permissions:
          routesPermissions['/providers'].subPages['/delegates'].permissions,
      },
    ],
  },
  {
    title: 'الادارة',
    url: '/management',
    iosIcon: copyOutline,
    mdIcon: copyOutline,
    permissions: routesPermissions['/management'].permissions,

    subPages: [
      {
        title: 'الموظفين',
        url: '/employees',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
        permissions:
          routesPermissions['/management'].subPages['/employees'].permissions,
      },
      {
        title: 'المصاريف الاَخرى',
        url: '/other-spendings',
        iosIcon: cartOutline,
        mdIcon: cartOutline,
        permissions:
          routesPermissions['/management'].subPages['/other-spendings']
            .permissions,
      },
      {
        title: 'الاشتراكات',
        url: '/subscriptions',
        iosIcon: cardOutline,
        mdIcon: cardOutline,
        permissions:
          routesPermissions['/management'].subPages['/subscriptions']
            .permissions,
      },
    ],
  },
  {
    title: 'الحسابات',
    url: '/finances-accounts',
    iosIcon: fileTrayStackedOutline,
    mdIcon: fileTrayStackedOutline,
    permissions: routesPermissions['/finances-accounts'].permissions,

    subPages: [
      {
        title: 'الحسابات الخاصة',
        url: '/special-accounts',
        iosIcon: fileTrayFullOutline,
        mdIcon: fileTrayFullOutline,
        permissions:
          routesPermissions['/finances-accounts'].subPages['/special-accounts'],
      },
      {
        title: 'حسابات الشركات',
        url: '/companies-accounts',
        iosIcon: businessOutline,
        mdIcon: businessOutline,
        permissions:
          routesPermissions['/finances-accounts'].subPages[
            '/companies-accounts'
          ],
      },
    ],
  },
  {
    title: 'التقارير',
    url: '/reports',
    iosIcon: statsChartOutline,
    mdIcon: statsChartOutline,
    permissions: routesPermissions['/reports'].permissions,

    subPages: [
      {
        title: 'تقارير المبيعات',
        url: '/sells-reports',
        iosIcon: receiptOutline,
        mdIcon: receiptOutline,
        permissions: routesPermissions['/reports'].subPages['/sells-reports'],
      },
      {
        title: 'تقارير المخازن',
        url: '/warehouse-reports',
        iosIcon: homeOutline,
        mdIcon: homeOutline,
        permissions:
          routesPermissions['/reports'].subPages['/warehouse-reports'],
      },
      {
        title: 'التقارير المالية',
        url: '/finances-reports',
        iosIcon: cashOutline,
        mdIcon: cashOutline,
        permissions:
          routesPermissions['/reports'].subPages['/finances-reports'],
      },
      {
        title: 'تقارير المستخدمين',
        url: '/users-reports',
        iosIcon: peopleCircleOutline,
        mdIcon: peopleCircleOutline,
        permissions: routesPermissions['/reports'].subPages['/users-reports'],
      },
      {
        title: 'تقارير المزودين',
        url: '/providers-reports',
        iosIcon: peopleOutline,
        mdIcon: peopleOutline,
        permissions:
          routesPermissions['/reports'].subPages['/providers-reports'],
      },
    ],
  },
  {
    title: 'المخططات البيانية',
    url: '/dashboard',
    iosIcon: pieChartOutline,
    mdIcon: pieChartOutline,
    permissions: routesPermissions['/dashboard'].permissions,
  },
  {
    title: 'واجهة المستخدم',
    url: '/user-interface',
    iosIcon: brushOutline,
    mdIcon: brushOutline,
  },
  {
    title: 'تفاصيل النظام',
    url: '/program-info',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleOutline,
  },
];

export default appPages;
