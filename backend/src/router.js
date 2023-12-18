const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const boatControllers = require("./controllers/boatControllers");

router.get("/boats", boatControllers.browse);

const gameControllers = require("./controllers/gameControllers");

router.post("/games", gameControllers.add);

/* ************************************************************************* */
// Step 2
/* ************************************************************************* */

const tileControllers = require("./controllers/tileControllers");

router.get("/tiles", tileControllers.browse);

/* ************************************************************************* */
// Step 3
/* ************************************************************************* */

router.put("/boats/:id", boatControllers.edit);

/* ************************************************************************* */

module.exports = router;
