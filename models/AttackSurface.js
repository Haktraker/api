const mongoose = require("mongoose");

const AttackSurfaceSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
    },
    affectedSystems: {
      type: String,
    },
    openPorts: {
      type: [String],
    },
    services: {
      type: String,
    },
    screenshot: {
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

module.exports = mongoose.model("AttackSurface", AttackSurfaceSchema);
