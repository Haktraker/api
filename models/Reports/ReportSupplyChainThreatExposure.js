const mongoose = require("mongoose");

const ReportSupplyChainThreatExposure = new mongoose.Schema(
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

ReportSupplyChainThreatExposure.index({ chian: 1, month: 1 }, { unique: true });

module.exports = mongoose.model(
  "ReportSupplyChainThreatExposure",
  ReportSupplyChainThreatExposure
);
