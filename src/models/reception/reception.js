const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ReceptionData = new Schema({
  namePatient: { type: String, required: true },
  doctorName: { type: String, required: true },
  newDate: { type: String },
  complaints: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("receptiondatas", ReceptionData);
