import 'dotenv/config';
import { app } from 'electron';
import { checkDirectoryAccess } from './utils/functions/dir';
import { join } from 'path';

// Environment
export const node_env = process.env.NODE_ENV || 'development';

// API
export const API_URL = process.env.API_URL;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Directories
export const workingDirs = {
  appDir: {
    path: app.getPath('exe'),
    accessStatus: async function () {
      return await checkDirectoryAccess(this.path);
    },
  },
  userDataDir: {
    path: app.getPath('userData'),
    accessStatus: async function () {
      return await checkDirectoryAccess(this.path);
    },
  },
  blobDir: {
    path: join(app.getPath('userData'), 'blob_storage'),
    accessStatus: async function () {
      return await checkDirectoryAccess(this.path);
    },
  },
};
