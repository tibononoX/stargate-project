const express = require("express");

const { PlanetController } = require("../controllers");

const router = express.Router();

router.get("/", PlanetController.browse);
router.get("/:id", PlanetController.read);
router.post("/", PlanetController.add);

module.exports = router;
