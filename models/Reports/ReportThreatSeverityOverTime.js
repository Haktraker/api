const mongoose = require("mongoose");

const SeveritySchema = new mongoose.Schema({
  severity: {
    type: String,
    enum: ["Low", "High", "Medium", "Critical"],
  },
  count: {
    type: Number,
  },
});

const ReportThreatSeverityOverTimeSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
    },
    year: {
      type: String,
    },
    severities: {
      type: [SeveritySchema],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ReportThreatSeverityOverTime",
  ReportThreatSeverityOverTimeSchema
);
