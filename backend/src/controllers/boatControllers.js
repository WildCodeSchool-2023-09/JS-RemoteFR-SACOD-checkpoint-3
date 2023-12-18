/* eslint-disable radix */
/* eslint-disable camelcase */
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;
  try {
    const result = await tables.boat.update(id, coordX, coordY);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    res.sendStatus(422);
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
