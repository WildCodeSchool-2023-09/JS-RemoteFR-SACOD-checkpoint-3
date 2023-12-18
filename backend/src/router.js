const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const boatControllers = require("./controllers/boatControllers");
const tileControllers = require("./controllers/tileControllers");
const security = require("./services/tileExists");

router.get("/boats", boatControllers.browse);
router.get("/tiles", tileControllers.browse);

const gameControllers = require("./controllers/gameControllers");

router.post("/games", gameControllers.add);
router.put("/boats/:id", security, boatControllers.edit);
/* ************************************************************************* */

module.exports = router;
