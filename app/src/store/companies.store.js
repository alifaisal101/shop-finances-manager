import { atom } from 'recoil';

export const companiesStore = atom({
  key: 'companies',
  default: [],
});

export const apiEndpoints = {
  fetch: {
    url: ``,
    method: 'POST',
  },
};
