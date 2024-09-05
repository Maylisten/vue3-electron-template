import {app, Menu, MenuItemConstructorOptions} from "electron";

let applicationMenu: ApplicationMenu | null = null;

export async function createOrGetApplicationMenu() {
  if (!applicationMenu) {
    await app.whenReady();
    applicationMenu = ApplicationMenu.build();
  }
  return applicationMenu;
}

export class ApplicationMenu extends Menu {
  static build = function () {
    const template: Array<MenuItemConstructorOptions> = [{
      label: app.name,
      submenu: [
        {
          label: "设置", click: () => {
          }
        },
        {label: "退出", role: "quit"},
      ]
    }];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    return menu;
  };

  constructor() {
    super();
  }
}

