const mongoose = require("mongoose");

const PhaseSchema = new mongoose.Schema({
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
  score: {
    type: Number,
  },
});

const ReportIncidentResponseMetricsSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
    },
    year: {
      type: String,
    },
    phases: {
      type: [PhaseSchema],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ReportIncidentResponseMetrics",
  ReportIncidentResponseMetricsSchema
);
