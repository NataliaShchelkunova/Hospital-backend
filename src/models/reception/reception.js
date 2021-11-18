const { Schema, model } = require("mongoose");

const receptionData = new Schema({
  username: { type: String, unique: true, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = model("receptionData", receptionData);
