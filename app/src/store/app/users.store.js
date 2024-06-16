import { atom } from 'recoil';

export const userState = atom({
  key: 'user',
  default: {
    username: null,
    roleId: null,
    phoneNumber: null,
    fullName: null,
    workShift: null,
    photoUrl: null,
    notes: null,
    isLoggedIn: false,
  },
});
