import {readOrCreateDb} from "../../utils";

class TestService {
  async getWorld() {
    const db = await readOrCreateDb();
    return db.data.test.hello;
  }

  async saveWorld() {
    const db = await readOrCreateDb();
    await db.update(({test}) => {
      test.hello = 'world';
    });
  }
}

export const testService = new TestService();
