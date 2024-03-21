import { atom } from 'recoil';

export const rejectedItemsStore = atom({
  key: 'rejectedItemsState',
  default: [
    {
      _id: 120,
      purchaseRecord: {
        _id: 4,
        number: 4356,
      },
      date: new Date('2/14/24'),
      price: 1000000,
      desc: 'مواد اكسباير',
    },
  ],
});
