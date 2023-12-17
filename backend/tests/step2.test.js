// Import required dependencies
const { app, request } = require("./setup");

const tileControllers = require("../src/controllers/tileControllers");

describe("GET /api/tiles", () => {
  test("you declared and exported a browse function from tileControllers.js", async () => {
    expect(typeof tileControllers.browse).toBe("function");
  });
  test("your browse function has 3 parameters: req, res and next", async () => {
    expect(tileControllers.browse).toHaveLength(3);
  });
  test("you declared the route GET /api/tiles in router.js, and it sends back the tiles in the response", async () => {
    const response = await request(app).get("/api/tiles");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveLength(72);
  });
});
