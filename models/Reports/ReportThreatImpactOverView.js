const mongoose = require("mongoose");
const ReportThreatImpactOverViewSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
    },
    year: {
      type: String,
    },
    score: {
      type: Number,
    },
    phase: {
      type: String,
      enum: [
        "Threats Blocked",
        "Active Critical Threats",
        "Ongoing Investigations",
        "Resolved Threats",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ReportThreatImpactOverView",
  ReportThreatImpactOverViewSchema
);
