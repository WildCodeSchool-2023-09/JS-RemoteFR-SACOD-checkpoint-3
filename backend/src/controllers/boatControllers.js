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

const update = async (req, res) => {
  try {
    const boatId = req.params.id;
    const { name, coordX, coordY } = req.body;

    const updateResult = await tables.boat.update(
      { name, coordX, coordY },
      { where: { id: boatId } }
    );

    if (updateResult.affectedRows > 0) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const edit = async (req, res, next) => {
  try {
    const boatId = req.params.id;
    const { name, coordX, coordY } = req.body;

    const updateResult = await tables.boat.update(
      { name, coordX, coordY },
      { where: { id: boatId } }
    );

    if (updateResult.affectedRows > 0) {
      res.status(204).end();
    } else {
      res.status(404);
      next("Not Found");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  update,
  edit,
};
