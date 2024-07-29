import { ipcMain } from 'electron';

export function ipcApp(
  failedToActivate: boolean,
  failedToConnectToTheAPI: boolean
) {
  ipcMain.on('ready', (event) => {
    if (failedToActivate) {
      // return event.reply('alert_exit_error', messages.failedToActivate);
    }

    if (failedToConnectToTheAPI) {
      // return event.reply('alert_exit_error', messages.failedToConnectToApi);
    }
  });

  ipcMain.on('exit_error', () => {
    return process.exit(1);
  });
}
