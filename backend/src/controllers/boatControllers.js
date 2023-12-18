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
  try {
    const data = await tables.boat.update(
      req.params.id,
      req.body.coord_x,
      req.body.coord_y
    );
    return res.status(204).send(data);
  } catch (error) {
    next(error);
    return res.sendStatus(404);
  }
};

module.exports = {
  browse,
  edit,
};
