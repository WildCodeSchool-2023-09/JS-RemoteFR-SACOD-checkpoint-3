/* ************************************************************************* */
// Step 4
/* ************************************************************************* */
// const tables = require("../tables");

const middleware = (req, res, next) => {
  // 1 : SELECT coordX, coordY FROM tile WHERE id = ?
  // 2 : Verif si X Y existe dans la DB

  // eslint-disable-next-line radix
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;
  /*
  try {
    const tile = tables.tile.readByCoordinates();
    res.json(tile);
  } catch (err) {
    next(err);
  }
  */
  if (coordX <= 11 && coordX >= 0 && coordY <= 5 && coordY >= 0) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = {
  middleware,
};
