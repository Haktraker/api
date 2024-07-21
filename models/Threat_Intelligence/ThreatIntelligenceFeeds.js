const mongoose = require("mongoose");

const ThreatIntelligenceFeedsSchema = new mongoose.Schema(
  {
    threatType: {
      type: String,
      required: [true, "Threat Intelligence Feed threatType required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: [true, "Threat Intelligence Feed severity required"],
    },
    source: {
      type: String,
      required: [true, "Threat Intelligence Feed source required"],
    },
    description: {
      type: String,
      required: [true, "Threat Intelligence Feed description required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ThreatIntelligenceFeeds",
  ThreatIntelligenceFeedsSchema
);
