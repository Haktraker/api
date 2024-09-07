const mongoose = require("mongoose");

const QuarterlyThreatCompositionOverview = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Threat Composition Overview month required"],
      trim: true,
    },
    year: { type: String }, // Add year field

    score: {
      type: String,
      required: [true, "Threat Composition Overview Score required"],
    },
    threatType: {
      type: String,
      enum: ["Brute Force Attacks", "Insider Threats", "Malware/other Attacks"],
      required: [true, "Threat Composition Overview Compliance Type required"],
    },
    quarter: { type: Number, required: [true, "quarter required"] },
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
