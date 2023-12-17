// Import required dependencies
const { app, request, tables } = require("./setup");

const tileExists = require("../src/services/tileExists");

describe("The tileExists middleware", () => {
  test("you added a readByCoordinates method in TileManager.js", async () => {
    expect(typeof tables.tile.readByCoordinates).toBe("function");
  });
  test("your readByCoordinates method in TileManager.js takes 2 parameters 'coordX' and 'coordY'", async () => {
    expect(tables.tile.readByCoordinates).toHaveLength(2);
  });
  test("your readByCoordinates method in TileManager.js returns an array with tiles for valid coordinates", async () => {
    const tiles = await tables.tile.readByCoordinates(0, 0);

    expect(tiles).toHaveLength(1);
  });
  test("your readByCoordinates method in TileManager.js returns an empty array for bad coordinates", async () => {
    const tiles = await tables.tile.readByCoordinates(666, 666);

    expect(tiles).toHaveLength(0);
  });
  test("you exported a middleware from tileExists.js", async () => {
    expect(typeof tileExists).toBe("function");
  });
  test("your tileExists middleware has 3 parameters: req, res and next", async () => {
    expect(tileExists).toHaveLength(3);
  });
  test("your tileExists middleware calls next() if req.body.coord_x and req.body.coord_y are valid", async () => {
    const req = {
      body: {
        coord_x: 0,
        coord_y: 0,
      },
    };

    const res = {
      sendStatus: jest.fn(),
    };

    const next = jest.fn();

    await tileExists(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });
  test("your tileExists middleware calls res.sendStatus(422) if req.body.coord_x or req.body.coord_y is not valid", async () => {
    const req = {
      body: {
        coord_x: 0,
        coord_y: 666,
      },
    };

    const res = {
      sendStatus: jest.fn(),
    };

    const next = jest.fn();

    await tileExists(req, res, next);

    expect(res.sendStatus).toHaveBeenCalledWith(422);

    req.body.coord_x = 666;
    req.body.coord_y = 0;

    await tileExists(req, res, next);

    expect(res.sendStatus).toHaveBeenCalledWith(422);
  });
  test("you added the tileExists middleware in the route PUT /api/boats/:id in router.js", async () => {
    const flyingDutchman = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Flying Dutchman"
    );

    flyingDutchman.coord_x = 0;
    flyingDutchman.coord_y = 0;

    const response1 = await request(app)
      .put(`/api/boats/${flyingDutchman.id}`)
      .send(flyingDutchman);

    expect(response1.status).toBe(204);

    flyingDutchman.coord_x = 666;
    flyingDutchman.coord_y = 666;

    const response2 = await request(app)
      .put(`/api/boats/${flyingDutchman.id}`)
      .send(flyingDutchman);

    expect(response2.status).toBe(422);
  });
});
