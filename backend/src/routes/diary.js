const express = require("express");
const db = require("../db");
const router  = express.Router();

router.get("/", (req, res) => {
  db.getAll((inputs) => {
    res.json(inputs);
  });
});

router.post("/", (req, res) => {
  const {happyvalue, angryvalue, sadvalue, joyvalue, titlevalue, bodyvalue} = req.body;
  db.add(happyvalue, angryvalue, sadvalue, joyvalue, titlevalue, bodyvalue, (newInput) => {
    res.json(newInput);
  });
});

module.exports = router;
