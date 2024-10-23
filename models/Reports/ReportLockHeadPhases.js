const mongoose = require("mongoose");

const SeveritySchema = new mongoose.Schema({
  severity: {
    type: String,
    enum: ["Low", "Medium", "High", "Critical"],
  },
  score: {
    type: Number,
  },
});

const ReportLockHeadPhasesSchema = new mongoose.Schema(
  {
    month: {
      type: String,
    },
    year: {
      type: String,
    },
    phase: {
      type: String,
      enum: [
        "Reconnaissance",
        "Weaponization",
        "Delivery",
        "Exploitation",
        "Installation",
        "Command and Control (C&C)",
        "Actions on Objectives",
      ],
    },
    severities: [SeveritySchema], // An array of severity objects with score
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ReportLockHeadPhase",
  ReportLockHeadPhasesSchema
);
