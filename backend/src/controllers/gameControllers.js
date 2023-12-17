const tables = require("../tables");

const add = async (req, res, next) => {
  const blackPearl = (await tables.boat.readAll()).find(
    (boat) => boat.name === "Black Pearl"
  );
  blackPearl.coord_x = 1;
  blackPearl.coord_y = 1;

  const treasureIsland = await tables.tile.getRandomIsland();

  try {
    const boatResult = await tables.boat.update(
      blackPearl.id,
      blackPearl.coord_x,
      blackPearl.coord_y
    );

    if (boatResult.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      const tileResult = await tables.tile.hideTreasure(treasureIsland);

      if (tileResult.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  add,
};
