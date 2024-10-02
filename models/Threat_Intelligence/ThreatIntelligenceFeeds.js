const mongoose = require("mongoose");

const ThreatIntelligenceFeedsSchema = new mongoose.Schema(
  {
    threatType: {
      type: String,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
    },
    source: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ThreatIntelligenceFeeds",
  ThreatIntelligenceFeedsSchema
);
