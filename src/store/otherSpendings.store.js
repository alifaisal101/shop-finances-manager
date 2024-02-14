import { atom } from 'recoil';

export const otherSpendingsStore = atom({
  key: 'otherSpendingsState',
  default: [
    {
      _id: 62,
      paymentType: 'indirect', // direct or indirect'
      totalCost: 7000000,
      debt: 5000000,
      title: 'فاتورة الكهرباء',
      payments: [
        {
          _id: 1,
          paydate: new Date('2/12/24'),
          paymentAmount: 1000000,
        },
        {
          _id: 2,
          paydate: new Date('2/13/24'),
          paymentAmount: 1000000,
        },
      ],

      date: new Date('2/12/24'),
    },
    {
      _id: 65,
      paymentType: 'direct', // direct or indirect'
      totalCost: 100000,
      title: 'الانترنت',
      date: new Date('2/13/24'),
    },
  ],
});
