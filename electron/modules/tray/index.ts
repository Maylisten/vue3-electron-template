import {app, Menu, NativeImage, Tray} from "electron";
import {TRAY_IMAGE} from "../../config.ts";

let applicationTray: ApplicationTray | null = null;

export async function createOrGetApplicationTray() {
  if (!applicationTray) {
    await app.whenReady();
    applicationTray = new ApplicationTray(TRAY_IMAGE);
    const contextMenu = Menu.buildFromTemplate([
      {label: 'Item1', type: 'radio'},
      {label: 'Item2', type: 'radio'},
      {label: 'Item3', type: 'radio', checked: true},
      {label: 'Item4', type: 'radio'}
    ]);
    applicationTray.setContextMenu(contextMenu);
  }
  return applicationTray;
}

export class ApplicationTray extends Tray {
  constructor(icon: NativeImage) {
    super(icon);
  }
}

