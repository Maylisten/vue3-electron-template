import {ipcMain} from "electron";
import {service} from "../service";

export function addTestHandler() {
  ipcMain.handle('test:saveWorld', () => {
    return service.test.saveWorld();
  });

  ipcMain.handle('test:getWorld', () => {
    return service.test.getWorld();
  });
}
