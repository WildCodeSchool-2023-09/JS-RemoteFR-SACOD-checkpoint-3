const express = require("express");

const router = express.Router();

const boatControllers = require("./controllers/boatControllers");

router.get("/boats", boatControllers.browse);
router.put("/boats/:id", boatControllers.edit);

const gameControllers = require("./controllers/gameControllers");

router.post("/games", gameControllers.add);

/* ************************************************************************* */

const tileControllers = require("./controllers/tileControllers");

router.get("/tiles", tileControllers.browse);

module.exports = router;
