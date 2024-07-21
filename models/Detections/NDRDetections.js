const mongoose = require("mongoose");

const NDRDetectionsSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
      required: [true, "NDRDetection detectionTime required"],
    },
    alertID: {
      type: String,
      required: [true, "NDRDetection alertID required"],
    },
    threatType: {
      type: String,
      required: [true, "NDRDetection threatType required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: [true, "NDRDetection severity required"],
    },
    bu: { type: String, required: [true, "NDRDetection bu required"] },
    sourceIP: {
      type: String,
      required: [true, "NDRDetection sourceIP required"],
    },
    destinationIP: {
      type: String,
      required: [true, "NDRDetection destinationIP required"],
    },
    sourcePort: {
      type: String,
      required: [true, "NDRDetection sourcePort required"],
    },
    destinationPort: {
      type: String,
      required: [true, "NDRDetection destinationPort required"],
    },
    description: {
      type: String,
      required: [true, "NDRDetection description required"],
    },
    actionTaken: {
      type: String,
      required: [true, "NDRDetection actionTaken required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "NDRDetection mitigationSteps required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NDRDetections", NDRDetectionsSchema);
