const tables = require("../tables");

const tileExists = async (req, res, next) => {
  try {
    const tile = await tables.tile.readByCoordinates(
      req.body.coord_x,
      req.body.coord_y
    );

    if (tile) {
      next();
    } else {
      res.status(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = tileExists;
