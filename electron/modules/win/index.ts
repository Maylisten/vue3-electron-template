import {BrowserWindow} from "electron";
import {app} from "electron";
import {createMainWindow} from "./main.ts";

let windowManager: WindowManager | null = null;

export async function createOrGetWindowManager() {
  if (!windowManager) {
    await app.whenReady();
    windowManager = new WindowManager();
    await windowManager.start();
  }
  return windowManager;
}

export class WindowManager {
  nameWindows = new Map<string, BrowserWindow>();
  nameBootstraps = new Map<string, (() => BrowserWindow) | (() => Promise<BrowserWindow>)>();

  constructor() {
    this.initBootstraps();
    this.addAppListeners();
  }

  initBootstraps() {
    this.nameBootstraps.set("main", createMainWindow);
  }

  async start() {
    // 创建窗口
    await this.createOrShowWindow("main");
  }

  addAppListeners() {
    this.addActiveListener();
  }

  addActiveListener() {
    app.on('activate', () => {
      if (!this.checkIfExistVisibleWindow()) {
        this.createOrShowWindow("main");
      }
    });
  }

  checkIfExistVisibleWindow() {
    return [...this.nameWindows.values()].filter(win => win.isVisible()).length > 0;
  }

  async createOrShowWindow(windowName: string) {
    let win = this.nameWindows.get(windowName);
    if (win) {
      win.show();
    } else {
      const bootstrap = this.nameBootstraps.get(windowName);
      if (typeof bootstrap === "function") {
        win = await bootstrap();
      }
    }
    return win;
  }
}
