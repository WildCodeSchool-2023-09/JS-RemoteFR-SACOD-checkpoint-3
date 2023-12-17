// Import required dependencies
const { app, request, tables } = require("./setup");

describe("GET /api/boats?name=Black Pearl", () => {
  test("you added a 'where' parameter to method readAll() in BoatManager.js", async () => {
    expect(tables.boat.readAll).toHaveLength(1);
  });
  test("your method readAll() returns all boats if where == null", async () => {
    const rows = await tables.boat.readAll();

    expect(rows).toHaveLength(4);
  });
  test("otherwise, you used 'where.name' in the SQL request", async () => {
    const rows = await tables.boat.readAll({ name: "Black Pearl" });

    expect(rows).toHaveLength(1);
  });
  test("you passed 'req.query' as argument to tables.boat.readAll() in boatControllers.js", async () => {
    const response = await request(app).get("/api/boats?name=Black%20Pearl");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveLength(1);
  });
});
