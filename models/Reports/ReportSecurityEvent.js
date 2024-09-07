const mongoose = require("mongoose");

const ReportSecurityEventSchema = new mongoose.Schema({
  name: { type: String },
  alertVolume: { type: String },
  ReportSecurityEvent: { type: String },
  incident: { type: String },
  atoDarkWebASM: { type: String },
  month: { type: String },
  year: { type: String }, // Add year field
});

ReportSecurityEventSchema.index(
  {
    ReportSecurityEvents: 1,
    alertVolume: 1,
    incident: 1,
    atoDarkWebASM: 1,
    month: 1,
  },
  { unique: true }
);

module.exports = mongoose.model(
  "ReportSecurityEvent",
  ReportSecurityEventSchema
);
