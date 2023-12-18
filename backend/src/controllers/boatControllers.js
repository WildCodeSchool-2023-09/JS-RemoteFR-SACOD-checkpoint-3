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

/* ************************************************************************* */
// Step 3
/* ************************************************************************* */

const edit = async (req, res, next) => {
  // eslint-disable-next-line radix
  const id = parseInt(req.params.id);
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;

  try {
    // update one boat
    await tables.boat.update(id, coordX, coordY);

    // Respond with a 204 status (No Content)
    res.status(204).send();
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
