const mongoose = require("mongoose");

const DigitalRiskIntelligence = new mongoose.Schema(
  {
    level: {
      type: String,
      enum: ["no risk", "medium", "high", "critical"],
      required: [true, "Digital Risk Intelligence level required"],
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
      required: [true, "Digital Risk Intelligence indicator required"],
    },
  },
  { timestamps: true }
);

DigitalRiskIntelligence.index({ indicator: 1, level: 1 }, { unique: true });

module.exports = mongoose.model(
  "DigitalRiskIntelligence",
  DigitalRiskIntelligence
);
