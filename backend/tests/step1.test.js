// Import required dependencies
const { database } = require("./setup");

describe("The has_treasure attribute", () => {
  test("you added the attribute in database/schema.sql (remember to run again db:migrate and db:seed scripts)", async () => {
    const [result] = await database.query("describe tile");

    const hasTreasure = result.find(({ Field }) => Field === "has_treasure");

    expect(hasTreasure).toBeDefined();
  });
  test("the attribute is a boolean", async () => {
    const [result] = await database.query("describe tile");

    const hasTreasure = result.find(({ Field }) => Field === "has_treasure");

    expect(hasTreasure.Type).toMatch(/tinyint/);
  });
  test("the attribute is false by default", async () => {
    const [result] = await database.query("describe tile");

    const hasTreasure = result.find(({ Field }) => Field === "has_treasure");

    expect(hasTreasure.Default).toMatch(/0/);
  });
});
