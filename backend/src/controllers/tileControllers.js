const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all tiles from the database
    const tiles = await tables.tile.readAll();

    // Respond with the tiles in JSON format
    res.json(tiles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
};
