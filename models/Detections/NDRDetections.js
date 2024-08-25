const mongoose = require("mongoose");

const NDRDetectionsSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
      required: [true, "NDR Detection detectionTime required"],
    },
    alertID: {
      type: String,
      required: [true, "NDR Detection alertID required"],
    },
    threatType: {
      type: String,
      required: [true, "NDR Detection threatType required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: [true, "NDR Detection severity required"],
    },
    bu: { type: String, required: [true, "NDR Detection bu required"] },
    sourceIP: {
      type: String,
      required: [true, "NDR Detection sourceIP required"],
    },
    destinationIP: {
      type: String,
      required: [true, "NDR Detection destinationIP required"],
    },
    sourcePort: {
      type: String,
      required: [true, "NDR Detection sourcePort required"],
    },
    destinationPort: {
      type: String,
      required: [true, "NDR Detection destinationPort required"],
    },
    description: {
      type: String,
      required: [true, "NDR Detection description required"],
    },
    actionTaken: {
      type: String,
      required: [true, "NDR Detection actionTaken required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "NDR Detection mitigationSteps required"],
    },
    status: {
      type: String,
      enum: ["investigating", "resolved", "unresolved"],
      default: "unresolved",
      required: [true, "NDR Detection status required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NDRDetections", NDRDetectionsSchema);
