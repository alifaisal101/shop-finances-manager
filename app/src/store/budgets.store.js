import { atom } from 'recoil';

export const budgetStore = atom({
  key: 'budgetState',
  default: [
    {
      _id: 3,
      currentAmount: 5000000,
      maxReachedAmount: 5000000,
      lowestReachedAmount: 5000000,
      date: new Date('2/15/24'),
      transactions: [],
    },
    {
      _id: 2,
      currentAmount: 5400000,
      maxReachedAmount: 8000000,
      lowestReachedAmount: 5400000,
      transactions: [
        {
          _id: 1234,
          refId: 125,
          title: 'إيراد',
          amount: 8000000,
          type: 'income', // income, expense
          time: '8:00 ص',
          index: 1,
        },
        {
          _id: 22212,
          refId: 3,
          title: 'قائمة شراء أجل',
          amount: 1000000,
          type: 'expense', // income, expense
          time: '9:00 ص',
          index: 2,
        },
        {
          _id: 12322,
          refId: 4,
          title: 'قائمة شراء نقد',
          amount: 1500000,
          type: 'expense', // income, expense
          time: '9:40 ص',
          index: 3,
        },
        {
          _id: 123322,
          refId: 120,
          title: 'مواد مرفوضة',
          amount: 1000000,
          type: 'income', // income, expense
          time: '10:00 ص',
          index: 4,
        },
        {
          _id: 221132,
          refId: 62,
          title: 'مصاريف اخرى أجل',
          amount: 1000000,
          type: 'expense', // income, expense
          time: '12:00 م',
          index: 5,
        },
        {
          _id: 2211312,
          refId: 65,
          title: 'مصاريف اخرى نقد',
          amount: 100000,
          type: 'expense', // income, expense
          time: '1:00 م',
          index: 6,
        },
        {
          _id: 2211321,
          refId: 22,
          title: 'الموظفين',
          amount: 600000,
          type: 'expense', // income, expense
          time: '2:00 م',
          index: 7,
        },
      ],
      date: new Date('2/13/24'),
    },
    {
      _id: 1,
      currentAmount: 5700000,
      maxReachedAmount: 10000000,
      lowestReachedAmount: 5700000,
      transactions: [
        {
          _id: 12312,
          refId: 120,
          title: 'إيراد',
          amount: 10000000,
          type: 'income', // income, expense
          time: '8:00 ص',
          index: 1,
        },
        {
          _id: 12322,
          refId: 1,
          title: 'قائمة شراء نقد',
          amount: 1000000,
          type: 'expense', // income, expense
          time: '9:00 ص',
          index: 2,
        },
        {
          _id: 121322,
          refId: 2,
          title: 'قائمة شراء نقد',
          amount: 500000,
          type: 'expense', // income, expense
          time: '9:30 ص',
          index: 3,
        },
        {
          _id: 221322,
          refId: 3,
          title: 'قائمة شراء أجل',
          amount: 1000000,
          type: 'expense', // income, expense
          time: '9:45 ص',
          index: 4,
        },
        {
          _id: 221132,
          refId: 62,
          title: 'مصاريف اخرى أجل',
          amount: 1000000,
          type: 'expense', // income, expense
          time: '12:45 م',
          index: 5,
        },
        {
          _id: 2211232,
          refId: 21,
          title: 'الموظفين',
          amount: 800000,
          type: 'expense', // income, expense
          time: '2:45 م',
          index: 6,
        },
      ],
      date: new Date('2/13/24'),
    },
  ],
});
