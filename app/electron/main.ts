import { app, BrowserWindow, ipcMain, safeStorage } from 'electron';
import path from 'node:path';
import { checkActiveStatus } from './activation';
import { checkApiConnection } from './api-status';

// import { dirname } from 'path';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// const rootFs = dirname(__dirname);

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

  app.on('window-all-closed', () => {
    win = null;
  });
  app.whenReady().then();

  ipcMain.on('ready', (event) => {
    if (failedToActivate) {
      return event.reply('alert_exit_error', messages.failedToActivate);
    }

    if (failedToConnectToTheAPI) {
      return event.reply('alert_exit_error', messages.failedToConnectToApi);
    }
  });

  ipcMain.on('exit_error', () => {
    return process.exit(1);
  });

  // Input can't be focused after alert/confirm, fix
  ipcMain.on('focus-fix', () => {
    win.blur();
    win.focus();
  });

  // Handle printing
  ipcMain.on('print_budget', (event, budget) => {
    printBudgetWin.webContents.send('print_window_execute', budget);
  });
};

bootstrap();
