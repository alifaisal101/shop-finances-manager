export const routesPermissions = {
  '/login': {
    permissions: [],
  },
  '/admin-panel': {
    permissions: ['adminPanel'],
    subPages: {
      '/users': {
        permissions: ['adminPanel.users'],
      },
      '/roles': {
        permissions: ['adminPanel.roles'],
      },
      '/logs': {
        permissions: ['adminPanel.logs'],
      },
      '/database': {
        permissions: ['adminPanel.database'],
      },
      '/trademarks': {
        permissions: ['adminPanel.trademarks'],
      },
      '/app-settings': {
        permissions: ['adminPanel.appSettings'],
      },
    },
  },
  '/cashier': {
    permissions: ['adminPanel.cashier'],
    subPages: {
      '/pos': {
        permissions: ['cashier.pos', 'sells.records.create'],
      },
      '/refund': {
        permissions: ['cashier.refund', 'sells.refunds.create'],
      },
      '/returns': {
        permissions: ['cashier.returns', 'sells.returnRecords.create'],
      },
    },
  },
  '/warehouses': {
    permissions: ['warehouses'],
    subPages: {
      '/warehouses': {
        permissions: ['warehouses.warehouses'],
      },
      '/items': {
        permissions: ['warehouses.items'],
      },
      '/move-items': {
        permissions: ['warehouses.moveItems'],
      },
      '/empty-items': {
        permissions: ['warehouses.emptyItems'],
      },
      '/expired-items': {
        permissions: ['warehouses.expiredItems'],
      },
      '/print-barcode': {
        permissions: ['warehouses.printBarcode'],
      },
      '/add-items': {
        permissions: ['warehouses.addItems'],
      },
      '/remove-items': {
        permissions: ['warehouses.removeItems'],
      },
    },
  },
  '/sells': {
    permissions: ['sells'],
    subPages: {
      '/records': {
        permissions: ['sells.records'],
      },
      '/modify-record': {
        permissions: ['sells.modifyRecord'],
      },
      '/refunds': {
        permissions: ['sells.refunds'],
      },
      '/modify-refunds': {
        permissions: ['sells.modifyRefundRecord'],
      },
      '/return-sell': {
        permissions: ['sells.returnRecords'],
      },
      '/modify-return-sell': {
        permissions: ['sells.modifyReturnRecord'],
      },
    },
  },
  '/purchases': {
    permissions: ['purchases'],
    subPages: {
      '/records': {
        permissions: ['purchases.records'],
      },
      '/modify-record': {
        permissions: ['purchases.modifyRecord'],
      },
      '/return-purchase': {
        permissions: ['purchases.returnRecord'],
      },
      '/modify-return-purchase': {
        permissions: ['purchases.modifyReturnRecord'],
      },
    },
  },
  '/providers': {
    permissions: ['purchases.providers'],
    subPages: {
      '/companies': {
        permissions: ['purchases.companies'],
      },
      '/delegates': {
        permissions: ['purchases.delegates'],
      },
    },
  },
  '/management': {
    permissions: ['management'],
    subPages: {
      '/employees': {
        permissions: ['management.employees'],
      },
      '/other-spendings': {
        permissions: ['management.otherSpendings'],
      },
      '/subscriptions': {
        permissions: ['management.subscriptions'],
      },
    },
  },
  '/finances-accounts': {
    permissions: ['financesAccounts'],
    subPages: {
      '/special-accounts': {
        permissions: ['financesAccounts.specialAccounts'],
      },
      '/companies-accounts': {
        permissions: ['financesAccounts.companiesAccounts'],
      },
    },
  },
  '/reports': {
    permissions: ['reports'],
    subPages: {
      '/sells-reports': {
        permissions: ['reports.sellsReports'],
      },
      '/warehouse-reports': {
        permissions: ['reports.warehouses'],
      },
      '/finances-reports': {
        permissions: ['reports.financesReports'],
      },
      '/users-reports': {
        permissions: ['reports.userReports'],
      },
      '/providers-reports': {
        permissions: ['reports.providersReports'],
      },
    },
  },
  '/dashboard': {
    permissions: ['dashboard'],
  },
  '/user-interface': {},
  '/program-info': {},
};
