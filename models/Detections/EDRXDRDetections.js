const mongoose = require("mongoose");

const EDRXDRDetectionsSchema = new mongoose.Schema(
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
    device: {
      type: String,
    },
    user: { type: String },
    filePath: {
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

module.exports = mongoose.model("EDRXDRDetections", EDRXDRDetectionsSchema);
