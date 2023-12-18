/* ************************************************************************* */
// Step 4
/* ************************************************************************* */

const tileExists = (req, res, next) => {
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;

  if (coordX <= 11 && coordX >= 0 && coordY <= 5 && coordY >= 0) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = {
  tileExists,
};
