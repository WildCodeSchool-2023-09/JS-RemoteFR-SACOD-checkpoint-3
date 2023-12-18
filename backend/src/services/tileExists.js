const tables = require("../tables");

const tileExists = async (req, res, next) => {
  const tile = await tables.tile.readByCoordinates(
    req.body.coord_x,
    req.body.coord_y
  );
  if (tile.length !== 0) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExists;
