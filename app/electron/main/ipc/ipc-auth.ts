import { BrowserWindow, ipcMain } from 'electron';
import { storeToken } from '../handlers/auth.handler';
import { TokenIn } from '../../types/auth.types';

export function ipcAuth(win: BrowserWindow | null) {
  // Input can't be focused after alert/confirm, fix
  ipcMain.on('store_token', async (event, token: TokenIn) => {
    try {
      const storeSessionResult = await storeToken(token);
      event.reply('store_token_result');
    } catch (err) {
      event.reply('store_token_error');
    }
  });
}
