const mongoose = require("mongoose");

const QuarterlyThreatCompositionOverview = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
    },
    year: { type: String }, // Add year field

    score: {
      type: String,
    },
    threatType: {
      type: String,
      enum: [
        "ATO",
        "Insider Threats",
        "Trojan and Malware",
        "3rd Party leaks",
        "Attack Surfaces",
      ],
    },
    quarter: { type: Number },
  },
  { timestamps: true }
);

QuarterlyThreatCompositionOverview.index(
  { month: 1, threatType: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "QuarterlyThreatCompositionOverview",
  QuarterlyThreatCompositionOverview
);
