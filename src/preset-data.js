export const purchaseRecords = [
  {
    _id: 1,
    recordNumber: 12,
    company: 'درة',
    paymentType: 'direct', // direct or indirect'
    totalCost: 1000000,
    // debt: No debt field cause the payment is direct,
    date: new Date(),
  },
  {
    _id: 7,
    recordNumber: 2323,
    company: 'الامل2',
    paymentType: 'indirect', // direct or indirect'
    totalCost: 7000000,
    debt: 5000000,
    payments: [
      {
        _id: 1,
        paydate: new Date(),
        paymentAmount: 1000000,
      },
      {
        _id: 2,
        paydate: new Date(),
        paymentAmount: 1000000,
      },
    ],

    date: new Date(),
  },
  {
    _id: 2,
    recordNumber: 14723,
    company: 'درة2',
    paymentType: 'direct', // direct or indirect'
    totalCost: 100000,
    // debt: No debt field cause the payment is direct,
    date: new Date(),
  },
  {
    _id: 3,
    recordNumber: 563,
    company: 'درة3',
    paymentType: 'direct', // direct or indirect'
    totalCost: 5000000,
    // debt: No debt field cause the payment is direct,
    date: new Date(),
  },
  {
    _id: 4,
    recordNumber: 9812,
    company: 'درة4',
    paymentType: 'direct', // direct or indirect'
    totalCost: 2000000,
    // debt: No debt field cause the payment is direct,
    date: new Date(),
  },
  {
    _id: 5,
    recordNumber: 321,
    company: 'درة5',
    paymentType: 'direct', // direct or indirect'
    totalCost: 750000,
    // debt: No debt field cause the payment is direct,
    date: new Date(),
  },
  {
    _id: 6,
    recordNumber: 23,
    company: 'الامل',
    paymentType: 'indirect', // direct or indirect'
    totalCost: 7000000,
    debt: 5000000,
    payments: [
      {
        _id: 1,
        paydate: new Date(),
        paymentAmount: 1000000,
      },
      {
        _id: 2,
        paydate: new Date(),
        paymentAmount: 1000000,
      },
    ],

    date: new Date(),
  },
];
