import { writeFileSync, readFileSync, readdirSync } from 'fs';
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

export const readToken = (path: string) => {
  try {
    // Read the directory contents
    const files = readdirSync(path);

    // Filter files that start with "s_"
    const targetFiles = files.filter((file) => file.startsWith('s_'));

    if (targetFiles.length === 0) {
      return false;
    }

    // Read the first file found
    const firstFile = targetFiles[0];
    const tokenPath = join(path, firstFile);

    // Read the file content
    const tokenBlob = readFileSync(tokenPath);
    return { tokenBlob, tokenPath }; // Successfully read file content
  } catch (err) {
    throw err; // Propagate the error to be handled by the caller
  }
};

export const writeTokenBlob = (path: string, tokenBlob: Buffer) => {
  const fileName = `s_${crypto.randomBytes(16).toString('hex')}`;

  try {
    path = join(path, fileName);
    writeFileSync(path, tokenBlob);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
