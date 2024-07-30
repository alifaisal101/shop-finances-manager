import { getPassword, setPassword, deletePassword, findPassword } from 'keytar';
import { TokenIn } from '../../types/auth.types';

export const findToken = () => {};

export const deleteToken = () => {};

export const storeToken = async (token: TokenIn) => {
  // encrypt Token

  const tokenString = `${token.value}-${token.createdAt.toISOString}-${token.expiresIn}`;
  // const encryptedToken  = encrypt(tokenString);
  // store it in the storage
  // return results
};
