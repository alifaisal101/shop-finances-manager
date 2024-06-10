import { atom } from 'recoil';

export const roleState = atom({
  key: 'role',
  default: {
    role: null,
    description: null,
    permissions: [],
  },
});
