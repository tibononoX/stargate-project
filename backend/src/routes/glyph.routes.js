const express = require("express");

const { GlyphController } = require("../controllers");

const router = express.Router();

router.get("/", GlyphController.browse);
router.get("/:id", GlyphController.read);

module.exports = router;
