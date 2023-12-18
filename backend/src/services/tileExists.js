const tileExistsMiddleware = async (req, res, next) => {
  const coordX = req.body.coord_x;
  const coordY = req.body.coord_y;

  if (coordX >= 0 && coordX <= 11 && coordY >= 0 && coordY <= 5) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExistsMiddleware;
