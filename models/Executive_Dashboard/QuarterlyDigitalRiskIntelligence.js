const mongoose = require("mongoose");

const QuarterlyDigitalRiskIntelligence = new mongoose.Schema(
  {
    level: {
      type: String,
      enum: ["no risk", "medium", "high", "critical"],
      default: "no risk",
    },
    indicator: {
      type: String,
      enum: [
        "executive protection",
        "situational awareness",
        "impersonations",
        "social media",
      ],
    },
    year: { type: String }, // Add year field
    month: { type: String }, // Add month field
    quarter: { type: Number },
  },
  { timestamps: true }
);

// QuarterlyDigitalRiskIntelligence

module.exports = mongoose.model(
  "QuarterlyDigitalRiskIntelligence",
  QuarterlyDigitalRiskIntelligence
);
