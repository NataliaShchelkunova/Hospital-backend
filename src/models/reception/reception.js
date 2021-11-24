const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ReceptionData = new Schema({
  namePatient: { type: String, required: true },
  doctorName: { type: String, required: true },
  newDate: { type: Date, default: Date.now },
  complaints: { type: String, required: true },
});

module.exports = mongoose.model("receptionData", ReceptionData);
