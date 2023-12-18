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

const tileExists = require("./services/tileExists");

router.put("/boats/:id", tileExists, boatControllers.edit);

/* ************************************************************************* */
// Step 4
/* ************************************************************************* */

/* ************************************************************************* */

module.exports = router;
