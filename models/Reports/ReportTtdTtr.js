const mongoose = require("mongoose");

const ReportTtdTtr = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
    },
    year: { type: String }, // Add year field
    score: {
      type: String,
    },
    indicator: {
      type: String,
      enum: ["TTD", "TTR"],
    },
  },
  { timestamps: true }
);

// ReportTtdTtr.index({ month: 1, indicator: 1 }, { unique: true });

module.exports = mongoose.model("ReportTtdTtr", ReportTtdTtr);
