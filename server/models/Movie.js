const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String,
  plot: String,
  actors: String,
});

module.exports = mongoose.model("Movie", MovieSchema);
