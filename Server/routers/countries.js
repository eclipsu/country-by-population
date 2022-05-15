const express = require("express");
const router = express.Router();

const { game } = require("../controlers/game.js");

router.get("/game", game);

module.exports = router;
