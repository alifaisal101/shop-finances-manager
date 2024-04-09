import { atom } from 'recoil';

export const companiesStore = atom({
  key: 'companies',
  default: [],
});
