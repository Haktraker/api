const mongoose = require("mongoose");

const ReportThirdPartyThreat = new mongoose.Schema(
  {
    thirdParty: {
      type: String,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
    },
    year: { type: String }, // Add year field
    month: { type: String }, // Add month field
  },
  { timestamps: true }
);

// ReportThirdPartyThreat.index({ thirdParty: 1, month: 1 }, { unique: true });

module.exports = mongoose.model(
  "ReportThirdPartyThreat",
  ReportThirdPartyThreat
);
