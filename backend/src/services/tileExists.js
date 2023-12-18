const tileExists = (req, res, next) => {
  if (req.body.coord_x <= 11 && req.body.coord_y <= 11) {
    next();
  } else {
    res.sendStatus(422);
  }
};
module.exports = tileExists;
