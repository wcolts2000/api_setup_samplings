const express = require("express");
const db = require("../../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("users")
    .then(users => {
      res.json(users);
    })
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    db("users")
      .insert(req.body)
      .then(ids => {
        if (ids[0]) {
          res.json({ id: ids[0] });
        } else {
          res.status(400).json({ err: "error creating user" });
        }
      })
      .catch(err => {
        if (err.errno === 19) {
          res.json({ message: "username taken" });
        } else {
          next(err);
        }
      });
  } else {
    res.status(400).json({ message: "must provide username and password" });
  }
});

module.exports = router;
