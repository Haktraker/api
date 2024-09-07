const mongoose = require("mongoose");

const ReportTtdTtr = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Report TtdTtr month required"],
      trim: true,
    },
    year: { type: String }, // Add year field
    score: {
      type: String,
      required: [true, "Report TtdTtr Score required"],
    },
    indicator: {
      type: String,
      enum: ["TTD", "TTR"],
      required: [true, "Report TtdTtr Compliance Type required"],
    },
  },
  { timestamps: true }
);

ReportTtdTtr.index({ month: 1, indicator: 1 }, { unique: true });

module.exports = mongoose.model("ReportTtdTtr", ReportTtdTtr);
