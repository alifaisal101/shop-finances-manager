import { BrowserWindow, ipcMain } from 'electron';
import { retrieveToken, storeToken } from '../handlers/auth.handler';
import { TokenIn } from '../../types/auth.types';

export function ipcAuth(win: BrowserWindow | null) {
  ipcMain.on('store_token', (event, token: TokenIn) => {
    storeToken(token)
      .then((result) => {
        console.log(result);
        event.reply('store_token_result', result);
      })
      .catch((err) => {
        console.log(err);
        event.reply('store_token_error');
      });
  });
  ipcMain.on('retrieve_token', async (event) => {
    try {
      const result = await retrieveToken();
      event.reply('retrieve_token_result', result);
    } catch (err) {
      console.log(err);
      event.reply('retrieve_token_error');
    }
  });
}
