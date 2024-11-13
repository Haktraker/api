const mongoose = require("mongoose");

const RiskScoreDistribution = new mongoose.Schema(
  {
    low: {
      type: Number,
    },
    medium: {
      type: Number,
    },
    high: {
      type: Number,
    },
    critical: {
      type: Number,
    },
    month: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RiskScoreDistribution", RiskScoreDistribution);
