import { TokenIn } from '../../types/auth.types';
import { workingDirs } from '../config';
import { encrypt } from './crypto.handler';

export const findToken = () => {};

export const deleteToken = () => {};

export const storeToken = async (token: TokenIn) => {
  // Check if the workingDirs are accessible, if not return
  let storeDir: string;

  if (workingDirs.blobDir.accessStatus) {
    storeDir = workingDirs.blobDir.path;
  } else if (workingDirs.appDir.accessStatus) {
    storeDir = workingDirs.appDir.path;
  } else {
    return;
  }

  // convert the token object to a string
  const tokenString = `${token.value}-${token.createdAt.toISOString}-${token.expiresIn}`;

  let a = 'k_Dfpr&wGS%ds]36sS;w=td1zhDW&#p6';
  // encrypt the token
  console.log(encrypt(tokenString, a));
  a = null;
  // store it in the storage
  // return results
};
