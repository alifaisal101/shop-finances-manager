import { accessSync, constants, existsSync, opendirSync } from 'fs';

export const isDirWritable = (path: string) => {
  try {
    accessSync(path, constants.W_OK);
    return true;
  } catch (err) {
    return false;
  }
};

export const isDirReadable = (path: string) => {
  try {
    accessSync(path, constants.R_OK);
    return true;
  } catch (err) {
    return false;
  }
};

export const checkDirectoryStatus = (path: string) => {
  const dirStatus = {
    exists: existsSync(path),
    writable: false,
    readable: false,
  };

  if (dirStatus.exists) {
    // Check to see if the path is readable and writable to.
    dirStatus.readable = isDirReadable(path);
    dirStatus.writable = isDirWritable(path);

    return dirStatus;
  }

  return dirStatus;
};
