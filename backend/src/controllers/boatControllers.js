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

const read = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boat = await tables.boat.read(req.params.id);

    // Respond with the boats in JSON format
    if (boat == null) {
      res.sendStatus(404);
    } else {
      res.json(boat);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boat = await tables.boat.update(
      req.params.id,
      req.body.coord_x,
      req.body.coord_y
    );

    // Respond with the boats in JSON format
    res.status(204).json(boat);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
};
