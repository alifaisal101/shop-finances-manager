import { IpcRenderer } from 'electron';
import { TokenIn } from '../../types/auth.types';

export default (ipcRenderer: IpcRenderer) => {
  return {
    fetchToken: (cb: Function) => {
      ipcRenderer.send('fetch_token');
      ipcRenderer.on('fetch_token_result', (_event, result: Object) => {
        cb(null, result);
      });
      ipcRenderer.on('fetch_token_error', (_event, error: Error) => {
        cb(error, null);
      });
    },

    storeToken: (token: TokenIn, cb: Function) => {
      ipcRenderer.send('store_token', token);
      ipcRenderer.on('store_token_result', (_event, result: Object) => {
        cb(null, result);
      });
      ipcRenderer.on('store_token_error', (_event, error: Error) => {
        cb(error, null);
      });
    },
  };
};
