const mongoose = require("mongoose");

const QuarterlyThirdPartyThreat = new mongoose.Schema(
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
    quarter: { type: Number },
  },
  { timestamps: true }
);


module.exports = mongoose.model(
  "QuarterlyThirdPartyThreat",
  QuarterlyThirdPartyThreat
);
