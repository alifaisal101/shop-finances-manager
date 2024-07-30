import { IpcRenderer } from 'electron';

export default (ipcRenderer: IpcRenderer) => {
  return {
    printBudget: (budget: Object, cb: Function) => {
      ipcRenderer.send('print_budget', budget);
      ipcRenderer.on('print_budget_result', (_event, result: Object) => {
        cb(null, result);
      });
      ipcRenderer.on('print_budget_error', (_event, error: Error) => {
        cb(error, null);
      });
    },

    handlePrintWindow: (cb: Function) => {
      ipcRenderer.on('print_window_execute', (_event, budget: Object) => {
        cb(budget);
      });
    },
  };
};
