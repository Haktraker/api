const mongoose = require("mongoose");

const AttackSurfaceSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
    },
    affectedSystems: {
      type: String,
    },
    openPorts: [
      {
        port: {
          type: String,
        },
      },
    ],
    services: {
      type: String,
    },
    screenshot: {
      type: String,
    },
    sampleFile: {
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
