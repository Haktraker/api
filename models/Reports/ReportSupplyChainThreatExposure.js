const mongoose = require("mongoose");

const ReportSupplyChainThreatExposure = new mongoose.Schema(
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
  },
  { timestamps: true }
);

// ReportSupplyChainThreatExposure.index(
//   { chain: 1, month: 1, year: 1 },
//   { unique: true }
// );

module.exports = mongoose.model(
  "ReportSupplyChainThreatExposure",
  ReportSupplyChainThreatExposure
);
