import { atom } from 'recoil';

import { isSt } from 'validator';
import { isString, isUsernameValid } from '../../util/validators.functions';
import { locale } from '../../main';

export const loginState = atom({
  key: 'loginState',
  default: {
    username: {
      valid: false,
      value: '',
      error: '',
      validate(username) {
        if (!username) {
          return {
            error: 'locale.errors.ar.noUsername',
            valid: false,
          };
        }

        if (!isString(username)) {
          return {
            error: 'locale.errors.ar.invalidUsername',
            valid: false,
          };
        }
        if (!isUsernameValid(username)) {
          console.log('wtf');
          return { error: 'locale.errors.ar.invalidUsername', valid: false };
        }
        return { error: '', valid: true };
      },
    },
    password: {
      valid: false,
      value: '',
      error: '',
      validate(password) {
        if (!password) {
          return { error: 'locale.errors.ar.noPassword', valid: false };
        }

        if (typeof password != 'string') {
          return { error: 'locale.errors.ar.invalidPassword', valid: false };
        }

        return { error: '', valid: true };
      },
    },
  },
});
