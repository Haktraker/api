const mongoose = require("mongoose");

const QuarterlyThirdPartyThreat = new mongoose.Schema(
  {
    thirdParty: {
      type: String,
      required: [true, "Third Party required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: [true, "Third Party Threat severity required"],
    },
    year: { type: String }, // Add year field
    month: { type: String }, // Add month field
    quarter: { type: Number, required: [true, "quarter required"] },
  },
  { timestamps: true }
);

QuarterlyThirdPartyThreat.index({ thirdParty: 1, month: 1 }, { unique: true });

module.exports = mongoose.model(
  "QuarterlyThirdPartyThreat",
  QuarterlyThirdPartyThreat
);
