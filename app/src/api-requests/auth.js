import { locale } from '../main';
import { postRequest } from '../util/api-requests.functions';

export const loginApiRequest = async (username, password) => {
  let loggedIn = false;
  try {
    const response = await postRequest({ username, password }, '/auth/login');
    return { loggedIn: true, response };
  } catch (err) {
    console.log(err);

    if (err.message == 'Bad Request') {
      return { loggedIn, message: locale.errors.ar.failedToLoginBadRequest };
    } else {
      return { loggedIn, message: locale.errors.ar.failedToLoginSystemError };
    }
  }
};

export const validateTokenApiRequest = async (token) => {
  try {
    const response = await postRequest({ token }, '/auth/validate-token');
    return { isValid: true, response };
  } catch (err) {
    return { isValid: false };
  }
};
