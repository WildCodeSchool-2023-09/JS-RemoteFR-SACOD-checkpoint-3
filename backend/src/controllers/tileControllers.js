const tables = require("../tables");

const browse = async (req, res, next) => {
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;
  try {
    const tiles = await tables.tile.readAll(coordX, coordY);

    res.json(tiles);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
