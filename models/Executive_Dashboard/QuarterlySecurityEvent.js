const mongoose = require("mongoose");

const SecurityEventSchema = new mongoose.Schema({
  name: { type: String },
  alertVolume: { type: String },
  securityEvent: { type: String },
  incident: { type: String },
  atoDarkWebASM: { type: String },
  month: { type: String },
  year: { type: String }, // Add year field
  quarter: { type: Number, required: [true, "quarter required"] },
});

module.exports = mongoose.model("SecurityEvent", SecurityEventSchema);
