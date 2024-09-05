import {BrowserWindow} from "electron";
import {PRELOAD_PATH, RENDERER_DIST, VITE_DEV_SERVER_URL} from "../../config.ts";
import path from "node:path";

export class MainWindow extends BrowserWindow {

  constructor() {
    super({
      show: true,
      width: 1000,
      height: 670,
      minWidth: 1000,
      minHeight: 670,
      webPreferences: {
        preload: PRELOAD_PATH,
      },
      titleBarStyle: "hidden",
      alwaysOnTop: true,
      hasShadow: true,
      transparent: true
    });
    this.webContents.openDevTools();

    // this.once('ready-to-show', () => {
    //   this.show();
    // });

    // win.on("close", (event) => {
    //   event.preventDefault();
    //   win.hide();
    // });
  }

  async init() {
    if (VITE_DEV_SERVER_URL) {
      await this.loadURL(`${VITE_DEV_SERVER_URL}/#/home`);
    } else {
      await this.loadFile(path.join(RENDERER_DIST, `index.html`), {hash: "home"});
    }
  }
}

export async function createMainWindow() {
  const mainWindow = new MainWindow();
  await mainWindow.init();
  return mainWindow;
}
