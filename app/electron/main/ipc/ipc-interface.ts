import { BrowserWindow, ipcMain } from 'electron';

export function ipcInterface(win: BrowserWindow | null) {
  // Input can't be focused after alert/confirm, fix
  ipcMain.on('focus-fix', () => {
    win.blur();
    win.focus();
  });
}
