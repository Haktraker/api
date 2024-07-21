const mongoose = require("mongoose");

const EDRXDRDetectionsSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
      required: [true, "EDRXDRDetection detectionTime required"],
    },
    alertID: {
      type: String,
      required: [true, "EDRXDRDetection alertID required"],
    },
    threatType: {
      type: String,
      required: [true, "EDRXDRDetection threatType required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: [true, "EDRXDRDetection severity required"],
    },
    bu: { type: String, required: [true, "EDRXDRDetection bu required"] },
    device: {
      type: String,
      required: [true, "EDRXDRDetection device required"],
    },
    user: { type: String, required: [true, "EDRXDRDetection user required"] },
    filePath: {
      type: String,
      required: [true, "EDRXDRDetection filePath required"],
    },
    actionTaken: {
      type: String,
      required: [true, "EDRXDRDetection actionTaken required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "EDRXDRDetection mitigationSteps required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EDRXDRDetections", EDRXDRDetectionsSchema);
