import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('api', {
  test: {
    saveWorld: () => {
      return ipcRenderer.invoke('test:saveWorld') as Promise<void>;
    },
    getWorld: () => {
      return ipcRenderer.invoke('test:getWorld') as Promise<string>;
    },
  }
});
