const express = require("express");

const emojis = require("./emojis");
const samples = require("./samples");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏"
  });
});

router.use("/emojis", emojis);

router.use("/samples", samples);

module.exports = router;
