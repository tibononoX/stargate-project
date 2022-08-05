const express = require("express");

const planetRoutes = require("./planet.routes");
const glyphRoutes = require("./glyph.routes");

const router = express.Router();

router.use("/planets", planetRoutes);
router.use("/glyphs", glyphRoutes);

module.exports = router;
