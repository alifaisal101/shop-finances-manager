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

export const rejectedItems = [
  {
    _id: 120,
    purchaseRecordId: 4,
    date: new Date(),
    price: 1000000,
    desc: 'dusah uishads uhsda hsuhsduahdsa',
  },
];

export const otherSpendings = [
  {
    _id: 6,
    paymentType: 'indirect', // direct or indirect'
    totalCost: 7000000,
    debt: 5000000,
    title: 'فاتورة الكهرباء',
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

export const employees = [
  {
    _id: 21,
    name: 'محمد',
    sex: 'male',
    phoneNumber: '07841724266',
    salary: 800000,
    payDate: new Date(),
  },
];

export const earnings = [
  {
    _id: 12,
    date: new Date(),
    amount: 10000000,
  },
];

export const budgets = [
  {
    _id: 12,
    date: new Date(),
    currentAmount: 5000000,
    maxReachedAmount: 11000000,
    lowestReachedAmount: 4000000,
    transactions: [
      {
        _id: 1234,
        refId: 4,
        amount: -2000000,
        date: new Date(),
      },
    ],
  },
];
