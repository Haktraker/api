const mongoose = require("mongoose");

const VulnerabilitiesIntelligenceSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
    },
    vulnerabilityID: {
      type: String,
    },
    description: {
      type: String,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
    },
    affectedSystems: {
      type: String,
    },
    impact: {
      type: String,
    },
    cvsScore: {
      type: String,
    },
    exploitAvailability: {
      type: String,
    },
    patchAvailability: {
      type: String,
    },
    vendor: {
      type: String,
    },
    mitigationSteps: {
      type: String,
    },
    sampleFile: {
      type: String,
    },
    status: {
      type: String,
      enum: ["investigating", "resolved", "unresolved"],
      default: "unresolved",
    },
    references: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "VulnerabilitiesIntelligence",
  VulnerabilitiesIntelligenceSchema
);
