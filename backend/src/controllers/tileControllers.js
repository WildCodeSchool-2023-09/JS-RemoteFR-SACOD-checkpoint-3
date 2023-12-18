const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const tiles = await tables.tile.readAll();

    res.json(tiles);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
