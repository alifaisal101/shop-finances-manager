import { writeFileSync } from 'fs';
import { TokenIn } from '../../types/auth.types';
import { workingDirs } from '../config';
import { decrypt, encrypt } from './crypto.handler';
import { deserialize, serialize } from './serialization.handler';
import { grabTokenBlobStoreDir, writeTokenBlob } from './filesystem.handler';

export const findToken = () => {};

export const deleteToken = () => {};

export const storeToken = async (token: TokenIn) => {
  // Check if the workingDirs are accessible, if not return
  const storeDir = grabTokenBlobStoreDir();
  if (!storeDir) {
    return;
  }

  // convert the token object to a string
  const tokenString = `${token.value}=${token.createdAt}=${token.expiresIn}`;

  let a = 'k_Dfpr&wGS%ds]36sS;w=td1zhDW&#p6';
  // encrypt the token
  const { iv, encryptedData } = encrypt(tokenString, a);
  a = null;

  const serializedBlob = serialize(
    encryptedData.toString('hex') + '==' + iv.toString('hex')
  );

  const result = writeTokenBlob(storeDir, serializedBlob);

  console.log('sadsadsadasdasdasdsadsas', result);
};
