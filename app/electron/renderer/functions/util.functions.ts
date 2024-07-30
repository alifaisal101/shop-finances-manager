import { IpcRenderer } from 'electron';

export default (ipcRenderer: IpcRenderer) => {
  return {
    // Replacing the alert and confirm function with new ones, fixing the input focus issue

    alert: (msg?: string) => {
      const res = window.alert(msg);
      ipcRenderer.send('focus-fix');
      return res;
    },

    confirm: (msg?: string) => {
      const res = window.confirm(msg);
      ipcRenderer.send('focus-fix');
      return res;
    },

    getConfig: () => {
      return { API_URL: process.env.API_URL };
    },
  };
};
