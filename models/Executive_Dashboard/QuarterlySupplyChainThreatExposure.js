const mongoose = require("mongoose");

const QuarterlySupplyChainThreatExposure = new mongoose.Schema(
  {
    chain: {
      type: String,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
    },
    month: {
      type: String,
    },
    year: { type: String }, // Add year field
    quarter: { type: Number },
  },
  { timestamps: true }
);

QuarterlySupplyChainThreatExposure.index(
  { chian: 1, month: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "QuarterlySupplyChainThreatExposure",
  QuarterlySupplyChainThreatExposure
);
