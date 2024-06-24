import { atom } from 'recoil';
import { locale } from '../../../../main';
import {
  isUsernameValid,
  isValidIraqiPhoneNumber,
  isValidObjectId,
} from '../../../../util/validators.functions';

export const createUserState = atom({
  key: 'createUserState',
  default: {
    username: {
      valid: false,
      value: '',
      error: '',
      validate(username) {
        if (!username) {
          return {
            error: locale.errors.ar.noUsername,
            valid: false,
          };
        }

        if (!isString(username)) {
          return {
            error: locale.errors.ar.invalidUsername,
            valid: false,
          };
        }
        if (!isUsernameValid(username)) {
          return { error: locale.errors.ar.invalidUsername, valid: false };
        }
        return { error: '', valid: true };
      },
    },

    fullName: {
      valid: false,
      value: '',
      error: '',
      validate(fullName) {
        if (!fullName) {
          return {
            valid: false,
            error: locale.errors.ar.noFullName,
          };
        }
      },
    },
    roleId: {
      valid: false,
      value: '',
      error: '',
      validate(roleId) {
        if (!roleId) {
          return {
            valid: false,
            error: locale.errors.ar.noRole,
          };
        }

        if (!isValidObjectId(roleId)) {
          return {
            valid: false,
            error: locale.errors.ar.invalidRole,
          };
        }

        return {
          valid: true,
          error: '',
        };
      },
    },
    phoneNumber: {
      valid: false,
      value: '',
      error: '',
      validate(phoneNumber) {
        if (!phoneNumber) {
          return {
            valid: false,
            error: locale.errors.ar.noPhoneNumber,
          };
        }

        if (!isValidIraqiPhoneNumber(phoneNumber)) {
          return {
            valid: false,
            error: locale.errors.ar.invalidPhoneNumber,
          };
        }

        return {
          valid: true,
          error: '',
        };
      },
    },
    password: {},
    cPassword: {},
    sex: {},
    shift: {},
  },
});
