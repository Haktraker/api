const mongoose = require("mongoose");

const ReportCyberResilienceTimeTime = new mongoose.Schema(
  {
    hours: {
      type: String,
    },
    month: {
      type: String,
    },
    year: { type: String }, // Add year field
  },
  { timestamps: true }
);

// ReportCyberResilienceTimeTime.index({ hours: 1, month: 1 }, { unique: true });

module.exports = mongoose.model(
  "ReportCyberResilienceTimeTime",
  ReportCyberResilienceTimeTime
);
