const fs = require("node:fs");
const path = require("node:path");

const { tables } = require("./setup");

describe("Install environment", () => {
  test("you created .env file in backend", async () => {
    expect(fs.existsSync(path.join(__dirname, "..", ".env"))).toBe(true);
  });
  test("you executed db:migrate and db:seed scripts", async () => {
    const rows = await tables.tile.readAll();

    expect(rows).toHaveLength(72);
  });
});
