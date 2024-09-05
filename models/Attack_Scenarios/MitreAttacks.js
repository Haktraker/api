const mongoose = require("mongoose");

const MitreAttacksSchema = new mongoose.Schema({
  incidentId: {
    type: String,
    required: [true, " Mitre Attacks Incident ID is required"],
    unique: true,
  },
  tactic: {
    type: String,
    required: [true, " Mitre Attacks Tactic is required"],
  },
  technique: {
    type: String,
    required: [true, " Mitre Attacks Technique is required"],
  },
  description: {
    type: String,
    required: [true, " Mitre Attacks Description is required"],
  },
  ipAddress: {
    type: String,
    required: [true, " Mitre Attacks IP Address is required"],
  },
  user: {
    type: String,
    required: [true, " Mitre Attacks User is required"],
  },
  device: {
    type: String,
    required: [true, " Mitre Attacks Device is required"],
  },
  businessUnit: {
    type: String,
    required: [true, " Mitre Attacks Business Unit is required"],
  },
  detectionTime: {
    type: Date,
    required: [true, "Mitre Attacks detectionTime is required"],
  },
  severity: {
    type: String,
    enum: ["low", "medium", "high", "critical"],
    required: [true, " Mitre Attacks Severity is required"],
  },
  status: {
    type: String,
    enum: ["investigating", "resolved", "unresolved"],
    default: "unresolved",
    required: [true, " Mitre Attacks Status is required"],
  },
});

module.exports = mongoose.model("MitreAttacks", MitreAttacksSchema);
