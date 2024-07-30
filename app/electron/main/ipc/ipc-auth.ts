import { BrowserWindow, ipcMain } from 'electron';

export function ipcAuth(win: BrowserWindow | null) {
  // Input can't be focused after alert/confirm, fix
  ipcMain.on('store_token', () => {});
}
