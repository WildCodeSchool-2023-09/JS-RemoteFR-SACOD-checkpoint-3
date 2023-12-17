// Import required dependencies
const { app, request, tables } = require("./setup");

const boatControllers = require("../src/controllers/boatControllers");

describe("PUT /api/boats/:id", () => {
  test("you added an update method in BoatManager.js", async () => {
    expect(typeof tables.boat.update).toBe("function");
  });
  test("your update method in BoatManager.js takes 3 parameters : id, coordX and coordY", async () => {
    expect(tables.boat.update).toHaveLength(3);
  });
  test("your update method in BoatManager.js performs the SQL request 'update boat set coord_x=???, coord_y=??? where id=???'", async () => {
    const flyingDutchman = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Flying Dutchman"
    );

    flyingDutchman.coord_x = (flyingDutchman.coord_x + 2) % 12;
    flyingDutchman.coord_y = (flyingDutchman.coord_y + 1) % 6;

    await tables.boat.update(
      flyingDutchman.id,
      flyingDutchman.coord_x,
      flyingDutchman.coord_y
    );

    const updatedFlyingDutchman = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Flying Dutchman"
    );

    expect(updatedFlyingDutchman.coord_x).toBe(flyingDutchman.coord_x);
    expect(updatedFlyingDutchman.coord_y).toBe(flyingDutchman.coord_y);
  });
  test("your update method in BoatManager.js returns a result object with an 'affectedRows' property", async () => {
    const flyingDutchman = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Flying Dutchman"
    );

    flyingDutchman.coord_x = (flyingDutchman.coord_x + 2) % 12;
    flyingDutchman.coord_y = (flyingDutchman.coord_y + 1) % 6;

    const result = await tables.boat.update(
      flyingDutchman.id,
      flyingDutchman.coord_x,
      flyingDutchman.coord_y
    );

    expect(result.affectedRows).toBe(1);
  });
  test("you declared and exported an edit function from boatControllers.js", async () => {
    expect(typeof boatControllers.edit).toBe("function");
  });
  test("your edit function has 3 parameters: req, res and next", async () => {
    expect(boatControllers.edit).toHaveLength(3);
  });
  test("you declared the route PUT /api/boats/:id in router.js, and it is functional", async () => {
    const flyingDutchman = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Flying Dutchman"
    );

    flyingDutchman.coord_x = (flyingDutchman.coord_x + 2) % 12;
    flyingDutchman.coord_y = (flyingDutchman.coord_y + 1) % 6;

    const response = await request(app)
      .put(`/api/boats/${flyingDutchman.id}`)
      .send(flyingDutchman);

    expect(response.status).toBe(204);

    const updatedFlyingDutchman = (await tables.boat.readAll()).find(
      (boat) => boat.name === "Flying Dutchman"
    );

    expect(updatedFlyingDutchman.coord_x).toBe(flyingDutchman.coord_x);
    expect(updatedFlyingDutchman.coord_y).toBe(flyingDutchman.coord_y);
  });
});
