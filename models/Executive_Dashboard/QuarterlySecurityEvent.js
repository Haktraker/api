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

SecurityEventSchema.index(
  {
    securityEvents: 1,
    alertVolume: 1,
    incident: 1,
    atoDarkWebASM: 1,
    month: 1,
  },
  { unique: true }
);

module.exports = mongoose.model("SecurityEvent", SecurityEventSchema);
