import { writeFileSync } from 'fs';
import { join } from 'path';
import { workingDirs } from '../config';
import crypto from 'crypto';

export const grabTokenBlobStoreDir = () => {
  if (workingDirs.blobDir.accessStatus) {
    return workingDirs.blobDir.path;
  } else if (workingDirs.appDir.accessStatus) {
    return workingDirs.appDir.path;
  } else {
    return false;
  }
};

export const writeTokenBlob = (path: string, tokenBlob: Buffer) => {
  const fileName = `s_${crypto.randomBytes(16).toString('hex')}`;
  console.log('DSADSADSAD');

  try {
    path = join(path, fileName);
    writeFileSync(path, tokenBlob);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
