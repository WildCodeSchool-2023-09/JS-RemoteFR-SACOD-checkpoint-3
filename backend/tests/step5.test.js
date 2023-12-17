// Import required dependencies
const { database, tables } = require("./setup");

describe("JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y", () => {
  test("your readAll method in BoatManager.js selects boat.id", async () => {
    const [rows] = await database.query(`select * from boat`);

    const blackPearlAlone = rows[0];

    const blackPearlWithJoin = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Black Pearl"
    );

    expect(blackPearlWithJoin).toHaveProperty("id");
    expect(blackPearlWithJoin.id).toBe(blackPearlAlone.id);
  });
  test("your readAll method in BoatManager.js selects boat.coord_x", async () => {
    const blackPearl = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Black Pearl"
    );

    expect(blackPearl).toHaveProperty("coord_x");
  });
  test("your readAll method in BoatManager.js selects boat.coord_y", async () => {
    const blackPearl = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Black Pearl"
    );

    expect(blackPearl).toHaveProperty("coord_y");
  });
  test("your readAll method in BoatManager.js selects boat.name", async () => {
    const blackPearl = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Black Pearl"
    );

    expect(blackPearl).toHaveProperty("name");
  });
  test("your readAll method in BoatManager.js selects tile.type", async () => {
    const blackPearl = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Black Pearl"
    );

    expect(blackPearl).toHaveProperty("type");
  });
  test("your readAll method in BoatManager.js selects tile.has_treasure", async () => {
    const blackPearl = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Black Pearl"
    );

    expect(blackPearl).toHaveProperty("has_treasure");
  });
});
