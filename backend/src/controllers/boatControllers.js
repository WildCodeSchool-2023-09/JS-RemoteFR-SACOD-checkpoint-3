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
    const { id } = req.params;
    const coordX = req.body.coord_x;
    const coordY = req.body.coord_y;

    const boat = await tables.boat.update(id, coordX, coordY);
    if (boat.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  edit,
};
// const edit = async (req, res, next) => {
// const id = parseInt(req.params.id, 10);
// const coordX = req.body.coord_x;
// const coordY = req.body.coord_y;
// try {
// Fetch all boats from the database
//  await tables.boat.update(id, coordX, coordY);

// Respond with the boats in JSON format
//    res.status(204).end();
//  } catch (err) {
// Pass any errors to the error-handling middleware
//   next(err);
// }
// };

module.exports = {
  browse,
  edit,
};
