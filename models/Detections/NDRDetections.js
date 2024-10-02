const mongoose = require("mongoose");

const NDRDetectionsSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
    },
    alertID: {
      type: String,
    },
    threatType: {
      type: String,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
    },
    bu: { type: String },
    sourceIP: {
      type: String,
    },
    destinationIP: {
      type: String,
    },
    sourcePort: {
      type: String,
    },
    destinationPort: {
      type: String,
    },
    description: {
      type: String,
    },
    actionTaken: {
      type: String,
    },
    mitigationSteps: {
      type: String,
    },
    status: {
      type: String,
      enum: ["investigating", "resolved", "unresolved"],
      default: "unresolved",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NDRDetections", NDRDetectionsSchema);
