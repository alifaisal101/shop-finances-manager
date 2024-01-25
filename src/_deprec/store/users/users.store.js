import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    _id: null,
    phoneNumber: '',
    fullName: '',
    sex: '',
    suspensionStatus: false,
    Mainrole: { _id: null, label: '', permissions: [] },
    Subroles: [],
    permissions: [],
    createAt: null,
    updatedAt: null,
    lastLoggedInAt: null,
  },
});
