import { atom } from 'recoil';
import { isEmptyString, isString } from 'class-validator';

export const loginState = atom({
  key: 'loginState',
  default: {
    username: {
      valid: false,
      value: '',
      error: '',
      validate(username) {
        if (!username || isEmptyString(username)) {
          return { error: 'Username is required.', valid: false };
        }

        if (isString(username)) {
          return { error: 'Username must be a string.', valid: false };
        }
      },
    },
    password: {
      valid: false,
      value: '',
      error: '',
    },
  },
});
