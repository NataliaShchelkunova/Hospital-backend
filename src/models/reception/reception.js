const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const receptionData = new Schema({
  username: { type: String, unique: true, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("receptionData", receptionData);
