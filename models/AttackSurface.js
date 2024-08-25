const mongoose = require("mongoose");

const AttackSurfaceSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
      required: [true, "Attack Surface detectionTime required"],
    },
    affectedSystems: {
      type: String,
      required: [true, "Attack Surface affectedSystems required"],
    },
    openPorts: {
      type: [String],
      required: [true, "Attack Surface openPorts required"],
    },
    services: {
      type: String,
      required: [true, "Attack Surface services required"],
    },
    screenshot: {
      type: String,
      required: [true, "Attack Surface screenshot required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "Attack Surface mitigationSteps required"],
    },
    status: {
      type: String,
      enum: ["investigating", "resolved", "unresolved"],
      default: "unresolved",
      required: [true, "Attack Surface status required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AttackSurface", AttackSurfaceSchema);
