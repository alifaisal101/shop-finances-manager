import 'dotenv/config';
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import mongoose from 'mongoose';
// import { dirname } from 'path';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// const rootFs = dirname(__dirname);

const messages = {
  noMongodbURIFound: `
  لا يوجد رابط الاتصال في قاعدة البيانات
  No database connection string was found. Existing...
`,

  failedToConnectToDatabase: `
    فشل الاتصال في قاعدة البيانات
    Failed to connect to database. Existing...
  `,

  failedToActivate: `
    فشل تفعيل البرنامج
    Failed activation process.
  `,
};

const bootstrap = async () => {
  let failedToConnectToDB = false;
  let failedToActivate = false;

  await mongoose.connect(process.env.MONGODB_URI);

  process.env.DIST = path.join(__dirname, '../dist');
  process.env.PUBLIC = app.isPackaged
    ? process.env.DIST
    : path.join(process.env.DIST, '../public');

  let win: BrowserWindow | null;
  // 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
  const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];

  function createWindow() {
    win = new BrowserWindow({
      width: 1366,
      height: 768,
      icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        // contextIsolation: true,
      },
    });

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

  app.whenReady().then(createWindow);

  ipcMain.on('ready', (event) => {
    if (!process.env.MONGODB_URI) {
      event.reply('alert_exit_error', messages.noMongodbURIFound);
    }

    if (failedToConnectToDB) {
      event.reply('alert_exit_error', messages.failedToConnectToDatabase);
    }

    if (failedToActivate) {
      event.reply('alert_exit_error', messages.failedToActivate);
    }
  });

  ipcMain.on('exit_error', () => {
    return process.exit(1);
  });

  // Input can't be focued after alert/confirm, fix

  ipcMain.on('focus-fix', () => {
    win.blur();
    win.focus();
  });
};

bootstrap();
