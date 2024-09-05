import path from "node:path";
import {fileURLToPath} from "node:url";
import {app, nativeImage} from "electron";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];
export const APP_ROOT = path.join(__dirname, '..');
export const RENDERER_DIST = path.join(APP_ROOT, 'dist');
export const VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(APP_ROOT, 'public') : RENDERER_DIST;
export const MAIN_DIST = path.join(APP_ROOT, 'dist-electron');
export const PRELOAD_PATH = path.join(MAIN_DIST, "preload.mjs");
export const LOGO_IMAGE = nativeImage.createFromPath(path.join(VITE_PUBLIC, '/img/logo.png'));
export const TRAY_IMAGE = nativeImage.createFromPath(path.join(VITE_PUBLIC, '/img/tray.png'));
export const APP_NAME = "迷你 todo";
export const DB_STRUCTURE = {test: {hello: ""}};
export const DB_PATH = process.env.NODE_ENV === 'production' ? path.join(app.getPath("appData"), "db.json") : "db.json";
