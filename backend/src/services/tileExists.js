/* ************************************************************************* */
// Step 4
/* ************************************************************************* */

const tables = require("../tables");

const tileExists = async (req, res, next) => {
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;

  const tile = await tables.tile.readByCoordinates(coordX, coordY);

  if (tile.length > 0) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExists;
