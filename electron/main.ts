import {app} from 'electron';
import {APP_NAME, LOGO_IMAGE} from "./config.ts";
import {initModules} from "./modules/index.ts";

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
app.dock.setIcon(LOGO_IMAGE);
app.name = APP_NAME;

// app.dock.hide();

async function main() {
  await initModules();
}

app.whenReady().then(main);
