const express = require("express");
const db = require("../db");
const router  = express.Router();

router.get("/", (req, res) => {
  db.getAll((inputs) => {
    res.json(inputs);
  });
});

router.post("/", (req, res) => {
  const {happy, angry, sad, joy, title, body} = req.body;
  db.add(happy, angry, sad, joy, title, body, (newInput) => {
    res.json(newInput);
  });
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id, () => {
    res.status(200).send();
  });
});

module.exports = router;
