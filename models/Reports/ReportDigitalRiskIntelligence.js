const mongoose = require("mongoose");

const ReportDigitalRiskIntelligence = new mongoose.Schema(
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
  },
  { timestamps: true }
);

// ReportDigitalRiskIntelligence.index(
//   { indicator: 1, month: 1 },
//   { unique: true }
// );

module.exports = mongoose.model(
  "ReportDigitalRiskIntelligence",
  ReportDigitalRiskIntelligence
);
