const tables = require("../tables");

const tileExists = (req, res, next) => {
  if (req.body.coord_x && req.body.coord_y) {
    tables.boat.readByCoordinates();
    next();
  } else {
    res.sendStatus(422);
  }

  next();
};
module.exports = tileExists;
