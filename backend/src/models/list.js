const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String
  }, {timestamps: true});
  const ListModel = mongoose.model("list", schema);
  
  module.exports = ListModel