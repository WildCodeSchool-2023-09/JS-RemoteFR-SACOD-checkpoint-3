const tables = require("../tables");

const tileExists = (req, res, next) => {
  if (req.params.coord_x && req.params.coord_y) {
    tables.tile.readByCoordinates();
    next();
  } else {
    res.sendStatus(422);
  }
  next();
};

module.exports = tileExists;
