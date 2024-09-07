const mongoose = require("mongoose");

const ReportCyberSecurityTrends = new mongoose.Schema(
  {
    score: {
      type: String,
      required: [true, "Cyber Security Trends score required"],
    },
    indicator: {
      type: String,
      required: [true, "Cyber Security Trends indicator required"],
    },
    summary: {
      type: String,
      required: [true, "Cyber Security Trends summary required"],
    },
    year: { type: String }, // Add year field
    month: { type: String }, // Add month field
  },
  { timestamps: true }
);

ReportCyberSecurityTrends.index({ indicator: 1, score: 1 }, { unique: true });

module.exports = mongoose.model(
  "ReportCyberSecurityTrends",
  ReportCyberSecurityTrends
);
