import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import { checkActiveStatus } from './handlers/activation.handler';
import { checkApiConnection } from './handlers/api-status.handler.ts';
import { ipcInterface } from './ipc/ipc-interface.ts';
import { ipcPrint } from './ipc/ipc-print';
import { ipcApp } from './ipc/ipc-app';
import { checkDirectoryAccess } from './utils/functions/dir.ts';
import { ipcAuth } from './ipc/ipc-auth.ts';

const messages = {
  noMongodbURIFound: `
  لا يوجد رابط الاتصال في قاعدة البيانات
  No database connection string was found. Existing...
`,

  failedToConnectToApi: `
    فشل الاتصال
    Failed to connect to the API
    `,

  failedToActivate: `
    فشل تفعيل البرنامج
    Failed activation process.
  `,
};

const bootstrap = async () => {
  let failedToConnectToTheAPI = true;
  let failedToActivate = false;

  // try {
  //   await checkActiveStatus();
  // } catch (err) {
  //   console.log('Not Active');
  // }

  if ((await checkApiConnection()) || false) {
    failedToConnectToTheAPI = false;
  }

  process.env.DIST = path.join(__dirname, '../dist');
  process.env.PUBLIC = app.isPackaged
    ? process.env.DIST
    : path.join(process.env.DIST, '../public');

  let win: BrowserWindow | null;
  let printBudgetWin: BrowserWindow | null;
  // 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
  const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];

  function createWindow() {
    win = new BrowserWindow({
      width: 1366,
      height: 768,
      icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    });

    printBudgetWin = new BrowserWindow({
      show: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    });

    printBudgetWin.loadFile('./src/print/index.html');

    // Test active push message to Renderer-process.
    win.webContents.on('did-finish-load', () => {
      win?.webContents.send(
        'main-process-message',
        new Date().toLocaleString()
      );
    });

    if (VITE_DEV_SERVER_URL) {
      win.loadURL(VITE_DEV_SERVER_URL);
    } else {
      // win.loadFile('dist/index.html')
      win.loadFile(path.join(process.env.DIST, 'index.html'));
    }
  }

  app.whenReady().then(createWindow);

  ipcApp(failedToActivate, failedToConnectToTheAPI);
  ipcInterface(win);
  ipcPrint(printBudgetWin);
  ipcAuth(win);

  // // Get system locale
  // const systemLocale = app.getLocale()[0] + app.getLocale()[1];
  // console.log('System Locale:', systemLocale);
  // console.log(app.getPath('userData'));
};

bootstrap();
