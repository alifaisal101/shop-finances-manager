import { atom } from 'recoil';

export const purchaseRecordsStore = atom({
  key: 'purchaseRecordsState',
  default: [
    {
      _id: 1,
      recordNumber: 123,
      company: 'درة',
      paymentType: 'direct',
      totalCost: 1000000,
      date: new Date('2/12/24'),
    },
    {
      _id: 2,
      recordNumber: 4856,
      company: 'فلان',
      paymentType: 'direct',
      totalCost: 500000,
      date: new Date('2/12/24'),
    },
    {
      _id: 3,
      recordNumber: 231,
      company: 'فلان',
      paymentType: 'indirect',
      totalCost: 5000000,
      payments: [
        {
          _id: 1,
          paymentAmount: 1000000,
          paydate: new Date('2/12/24'),
        },
        {
          _id: 2,
          paymentAmount: 1000000,
          paydate: new Date('2/13/24'),
        },
      ],
      date: new Date('2/12/24'),
    },
    {
      _id: 4,
      recordNumber: 1221,
      company: '6فلان',
      paymentType: 'direct',
      totalCost: 1500000,
      date: new Date('2/13/24'),
    },
  ],
});
