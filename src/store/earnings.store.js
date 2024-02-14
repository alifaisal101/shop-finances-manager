import { atom } from 'recoil';

export const earningsStore = atom({
  key: 'earnings',
  default: [
    {
      _id: 120,
      date: new Date('2/13/24'),
      amount: 10000000,
    },
    {
      _id: 125,
      date: new Date('2/14/24'),
      amount: 8000000,
    },
    {
      _id: 125,
      date: new Date('2/15/24'),
      amount: 5000000,
    },
  ],
});
