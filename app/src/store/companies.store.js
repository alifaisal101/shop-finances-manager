import { atom } from 'recoil';

console.log(window.config);

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
