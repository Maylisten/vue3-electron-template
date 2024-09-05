import {JSONFilePreset} from "lowdb/node";
import {DB_PATH, DB_STRUCTURE} from "../config.ts";

export function readOrCreateDb() {
  return JSONFilePreset(DB_PATH, DB_STRUCTURE);
}
