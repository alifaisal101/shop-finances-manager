import { isAlpha, isAlphanumeric, isNumeric } from 'validator';
import { charsRemover } from './string.functions';

export const isUsernameValid = (username) => {
  if (!username || !isString(username)) {
    return false;
  }

  if (3 >= username.length >= 26) {
    return false;
  }

  return true;
};

export const isString = (input) => {
  return typeof input === 'string';
};

export const isValidIraqiPhoneNumber = (phoneNumber) => {
  let phoneNumberNoPlus = charsRemover('+', phoneNumber);
  if (!isNumeric(phoneNumberNoPlus)) {
    return false;
  }

  const countryCode = phoneNumber.substring(0, 3);
  const countryCodePlus = phoneNumber.substring(0, 4);

  if (
    countryCode !== '964' &&
    countryCodePlus !== '+964' &&
    phoneNumber[0] !== '0'
  ) {
    return false;
  }

  if (9 >= phoneNumber.length >= 18) {
    return false;
  }

  return true;
};

export const isValidFullName = (fullName) => {
  if (!fullName || !isString(fullName)) {
    return false;
  }

  fullName = charsRemover(' ', fullName);

  if (!isAlpha(fullName, 'en-US') && !isAlpha(fullName, 'ar')) {
    return false;
  }

  return true;
};

export const isValidTimeRange = (timeRange) => {
  // Regular expression to match the time range format
  const regex = /^([01]\d|2[0-3])([0-5]\d)-([01]\d|2[0-3])([0-5]\d)$/;

  // Check if the timeRange matches the regex pattern
  return regex.test(timeRange);
};
