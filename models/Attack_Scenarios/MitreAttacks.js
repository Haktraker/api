const mongoose = require("mongoose");

const MitreAttacksSchema = new mongoose.Schema({
  incidentId: {
    type: String,
  },
  tactic: {
    type: String,
  },
  technique: {
    type: String,
  },
  description: {
    type: String,
  },
  ipAddress: {
    type: String,
  },
  user: {
    type: String,
  },
  device: {
    type: String,
  },
  businessUnit: {
    type: String,
  },
  detectionTime: {
    type: Date,
  },
  severity: {
    type: String,
    enum: ["low", "medium", "high", "critical"],
  },
  status: {
    type: String,
    enum: ["investigating", "resolved", "unresolved"],
    default: "unresolved",
  },
});

module.exports = mongoose.model("MitreAttacks", MitreAttacksSchema);
