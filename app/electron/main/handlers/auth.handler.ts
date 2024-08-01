import { writeFileSync } from 'fs';
import { TokenIn } from '../../types/auth.types';
import { workingDirs } from '../config';
import { decrypt, encrypt } from './crypto.handler';
import { deserialize, serialize } from './serialization.handler';
import {
  grabTokenBlobStoreDir,
  readToken,
  writeTokenBlob,
} from './filesystem.handler';
import { machineIdSync } from 'node-machine-id';
import { errorLog, warnLog } from '../utils/functions/log';
import { matchMachineId } from './os.handler';

export const invalidTokenBlob = (tokenPath: string) => {
  deleteToken(tokenPath);
  return false;
};

export const tokenExpired = (
  tokenCreationDate: string,
  tokenExpireTime: string
) => {
  // Parse createdAt into Date object
  const createdAt = new Date(tokenCreationDate);

  // Parse expires string (e.g., "9h" for 9 hours)
  const expires = tokenExpireTime.trim();
  const duration = parseInt(expires); // Extracts the number part
  const unit = expires.slice(-1); // Extracts the unit part ('h' for hours, 'm' for minutes, etc.)

  // Calculate expiry time based on unit
  let expirationTime: number;
  switch (unit) {
    case 'h':
      expirationTime = createdAt.getTime() + duration * 60 * 60 * 1000;
      break;
    case 'm':
      expirationTime = createdAt.getTime() + duration * 60 * 1000;
      break;
    case 's':
      expirationTime = createdAt.getTime() + duration * 1000;
      break;
    default:
      throw new Error(`Unsupported expires unit: ${unit}`);
  }

  // Check if the cookie has expired
  const currentTime = Date.now();
  return currentTime > expirationTime;
};

export const retrieveToken = async () => {
  // Check if the workingDirs are accessible, if not return
  const storeDir = grabTokenBlobStoreDir();
  if (!storeDir) {
    return false;
  }

  try {
    const tokenFileObj = readToken(storeDir);
    if (!tokenFileObj) {
      return false;
    }

    const { tokenBlob, tokenPath } = tokenFileObj;

    try {
      const invalidTokenError = new Error('Invalid token');
      const deserializedData = deserialize(tokenBlob);
      const [encryptedData, iv] = deserializedData.split('==');
      if (!encryptedData || !iv) throw invalidTokenError;

      let a = 'k_Dfpr&wGS%ds]36sS;w=td1zhDW&#p6';
      const decryptedData = decrypt(encryptedData, iv, a);
      a = null;

      const [tokenValue, tokenCreatedAt, tokenExpireTime, originalMachineId] =
        decryptedData.split('=');

      if (!matchMachineId(originalMachineId)) throw invalidTokenError;
      if (tokenExpired(tokenCreatedAt, tokenExpireTime))
        throw invalidTokenError;

      return tokenValue;
    } catch (err) {
      warnLog(err);
      return invalidTokenBlob(tokenPath);
    }
  } catch (err) {
    errorLog(err);
    return false;
  }
};

export const deleteToken = (tokenPath: string) => {};

export const storeToken = async (token: TokenIn) => {
  // Check if the workingDirs are accessible, if not return
  const storeDir = grabTokenBlobStoreDir();
  if (!storeDir) {
    return;
  }

  // convert the token object to a string
  const tokenString = `${token.value}=${token.createdAt}=${
    token.expiresIn
  }=${machineIdSync()}`;

  let a = 'k_Dfpr&wGS%ds]36sS;w=td1zhDW&#p6';
  // encrypt the token
  const { iv, encryptedData } = encrypt(tokenString, a);
  a = null;

  const serializedBlob = serialize(encryptedData + '==' + iv);
  try {
    return writeTokenBlob(storeDir, serializedBlob);
  } catch (err) {
    errorLog(err);
  }
};
