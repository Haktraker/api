const mongoose = require("mongoose");

const CyberKillChainSchema = new mongoose.Schema({
  incidentId: {
    type: String,
    required: [true, " Cyber Kill Chain Incident ID is required"],
    unique: true,
  },
  killChainStage: {
    type: String,
    required: [true, " Cyber Kill Chain Kill Chain Stage is required"],
  },
  description: {
    type: String,
    required: [true, " Cyber Kill Chain Description is required"],
  },
  ipAddress: {
    type: String,
    required: [true, " Cyber Kill Chain IP Address is required"],
  },
  user: {
    type: String,
    required: [true, " Cyber Kill Chain User is required"],
  },
  device: {
    type: String,
    required: [true, " Cyber Kill Chain Device is required"],
  },
  businessUnit: {
    type: String,
    required: [true, " Cyber Kill Chain Business Unit is required"],
  },
  timestamp: {
    type: Date,
    required: [true, " Cyber Kill Chain Timestamp is required"],
  },
  severity: {
    type: String,
    enum: ["low", "medium", "high", "critical"],
    required: [true, " Cyber Kill Chain Severity is required"],
  },
  status: {
    type: String,
    enum: ["investigating", "resolved", "unresolved"],
    default: "unresolved",
    required: [true, " Cyber Kill Chain Status is required"],
  },
});

module.exports = mongoose.model("CyberKillChain", CyberKillChainSchema);
