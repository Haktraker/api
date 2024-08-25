const mongoose = require("mongoose");

const EDRXDRDetectionsSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
      required: [true, "EDR XDR Detection detectionTime required"],
    },
    alertID: {
      type: String,
      required: [true, "EDR XDR Detection alertID required"],
    },
    threatType: {
      type: String,
      required: [true, "EDR XDR Detection threatType required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: [true, "EDR XDR Detection severity required"],
    },
    bu: { type: String, required: [true, "EDR XDR Detection bu required"] },
    device: {
      type: String,
      required: [true, "EDR XDR Detection device required"],
    },
    user: { type: String, required: [true, "EDR XDR Detection user required"] },
    filePath: {
      type: String,
      required: [true, "EDR XDR Detection filePath required"],
    },
    actionTaken: {
      type: String,
      required: [true, "EDR XDR Detection actionTaken required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "EDR XDR Detection mitigationSteps required"],
    },
    status: {
      type: String,
      enum: ["investigating", "resolved", "unresolved"],
      default: "unresolved",
      required: [true, "EDR XDR Detection status required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EDRXDRDetections", EDRXDRDetectionsSchema);
