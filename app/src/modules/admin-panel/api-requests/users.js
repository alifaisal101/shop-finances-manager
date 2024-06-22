import { postRequest } from '../../../util/api-requests.functions';

export const postFetchUsers = async (token, filter) => {
  try {
    return await postRequest({ includeRoles: true }, '/users/fetch', token);
  } catch (err) {
    console.log(err);
  }
};
