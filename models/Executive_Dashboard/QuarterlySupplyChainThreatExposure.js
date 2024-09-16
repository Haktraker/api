const mongoose = require("mongoose");

const QuarterlySupplyChainThreatExposure = new mongoose.Schema(
  {
    chain: {
      type: String,
      required: [true, "Supply Chain Threat Exposure chian required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: [true, "Supply Chain Threat Exposure severity required"],
    },
    month: {
      type: String,
      required: [true, "Supply Chain Threat Exposure month required"],
    },
    year: { type: String }, // Add year field
    quarter: { type: Number, required: [true, "quarter required"] },
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
