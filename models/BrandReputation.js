const mongoose = require("mongoose");

const BrandReputationSchema = new mongoose.Schema(
  {
    domainName: {
      type: String,
    },
    brandName: {
      type: String,
    },
    incidentDescription: {
      type: String,
    },
    sampleFile: {
      type: String,
    },
    status: {
      type: String,
      enum: ["taking down", "in progress", "false positive", "resolving"],
    },
    mitigationSteps: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BrandReputation", BrandReputationSchema);
