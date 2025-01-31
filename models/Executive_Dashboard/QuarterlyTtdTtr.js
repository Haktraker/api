const mongoose = require("mongoose");

const QuarterlyTtdTtr = new mongoose.Schema(
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
    quarter: { type: Number },
  },
  { timestamps: true }
);


module.exports = mongoose.model("QuarterlyTtdTtr", QuarterlyTtdTtr);
