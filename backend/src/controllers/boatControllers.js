const tables = require("../tables");

const browse = async (req, res, next) => {
  const boatName = req.query;

  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll(boatName);

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;
  try {
    const updated = await tables.boat.update(id, coordX, coordY);
    if (updated.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
