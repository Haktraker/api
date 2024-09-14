const mongoose = require("mongoose");

const Impersonation = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
      required: [true, "Impersonation detectionTime required"],
    },
    user: { type: String, required: [true, "Impersonation user required"] },
    password: {
      type: String,
      required: [true, "Impersonation password required"],
    },
    url: { type: String, required: [true, "Impersonation url required"] },
    bu: { type: String, required: [true, "Impersonation bu required"] },
    source: {
      type: String,
      required: [true, "Impersonation source required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "Impersonation mitigationSteps required"],
    },
    screenshot: {
      type: String,
      required: [true, "Impersonation screenshot required"],
    },
    status: {
      type: String,
      enum: ["investigating", "resolved", "unresolved"],
      default: "unresolved",
      required: [true, "Impersonation status required"],
    },
    year: {
      type: String,
      required: [true, "Impersonation year required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Impersonation", Impersonation);
