const mongoose = require("mongoose");

const QuarterlyTtdTtr = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "TtdTtr Quarterly month required"],
      trim: true,
    },
    year: { type: String }, // Add year field
    score: {
      type: String,
      required: [true, "TtdTtr Quarterly Score required"],
    },
    indicator: {
      type: String,
      enum: ["TTD", "TTR"],
      required: [true, "TtdTtr Quarterly Compliance Type required"],
    },
    quarter: { type: Number, required: [true, "quarter required"] },
  },
  { timestamps: true }
);

QuarterlyTtdTtr.index({ month: 1, indicator: 1 }, { unique: true });

module.exports = mongoose.model("QuarterlyTtdTtr", QuarterlyTtdTtr);
