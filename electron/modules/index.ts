import {createOrGetWindowManager} from "./win";
import {createOrGetApplicationMenu} from "./menu";
import {createOrGetApplicationTray} from './tray';
import {app} from "electron";
import {addHandlers} from "./handler";

export async function initModules() {
  await app.whenReady();
  addHandlers();
  await createOrGetWindowManager();
  await createOrGetApplicationMenu();
  await createOrGetApplicationTray();
}
