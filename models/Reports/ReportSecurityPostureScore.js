const mongoose = require("mongoose");

const ReportSecurityPostureScore = new mongoose.Schema(
  {
    percentage: {
      type: String,
      required: [true, "Security Posture Percentage required"],
    },
    score: {
      type: String,
      required: [true, "Security Posture Score required"],
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
