const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const tileControllers = require("./controllers/tileControllers");

router.get("/tiles", tileControllers.browse);

const boatControllers = require("./controllers/boatControllers");

const tileExists = require("./services/tileExists");

router.get("/boats", boatControllers.browse);
router.put("/boats/:id", tileExists, boatControllers.edit);

const gameControllers = require("./controllers/gameControllers");

router.post("/games", gameControllers.add);

/* ************************************************************************* */

module.exports = router;
