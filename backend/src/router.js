const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const boatControllers = require("./controllers/boatControllers");

router.get("/boats", boatControllers.browse);

const gameControllers = require("./controllers/gameControllers");

router.post("/games", gameControllers.add);

const tilesControllers = require("./controllers/tileControllers");

router.get("/tiles", tilesControllers.browse);

/* ************************************************************************* */

module.exports = router;
