import { atom } from 'recoil';

export const employeesStore = atom({
  key: 'employeesState',
  default: [
    {
      _id: 21,
      name: 'محمد',
      sex: 'male',
      phoneNumber: '07841724266',
      salary: 800000,
      payDate: new Date('2/13/24'),
    },
    {
      _id: 22,
      name: 'فاطمة',
      sex: 'female',
      phoneNumber: '07xxxxxxx',
      salary: 600000,
      payDate: new Date('2/14/24'),
    },
  ],
});
