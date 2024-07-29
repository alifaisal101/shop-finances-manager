import { BrowserWindow, ipcMain } from 'electron';

export function ipcPrint(printBudgetWin: BrowserWindow | null) {
  // Handle printing
  ipcMain.on('print_budget', (event, budget) => {
    printBudgetWin.webContents.send('print_window_execute', budget);
  });
}
