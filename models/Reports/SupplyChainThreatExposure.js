const mongoose = require("mongoose");

const SupplyChainThreatExposure = new mongoose.Schema(
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
  },
  { timestamps: true }
);

SupplyChainThreatExposure.index({ chian: 1, severity: 1 }, { unique: true });

module.exports = mongoose.model(
  "SupplyChainThreatExposure",
  SupplyChainThreatExposure
);
