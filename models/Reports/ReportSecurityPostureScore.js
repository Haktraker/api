const mongoose = require("mongoose");

const ReportSecurityPostureScore = new mongoose.Schema(
  {
    percentage: {
      type: String,
    },
    score: {
      type: String,
    },
    year: { type: String }, // Add year field
    month: { type: String }, // Add month field
  },
  { timestamps: true }
);
ReportSecurityPostureScore.index({ percentage: 1, month: 1 }, { unique: true });

module.exports = mongoose.model(
  "ReportSecurityPostureScore",
  ReportSecurityPostureScore
);
