const mongoose = require("mongoose");

const BrandReputationSchema = new mongoose.Schema(
  {
    domainName: {
      type: String,
      required: [true, "Brand Reputation domain Name required"],
    },
    brandName: {
      type: String,
      required: [true, "Brand Reputation brand Name required"],
    },
    incidentDescription: {
      type: String,
      required: [true, "Brand Reputation incident Description required"],
    },
    status: {
      type: String,
      enum: ["taking down", "in progress", "false positive", "resolving"],
      required: [true, "Brand Reputation status required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "Brand Reputation mitigation Steps required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BrandReputation", BrandReputationSchema);
