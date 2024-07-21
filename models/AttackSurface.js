const mongoose = require("mongoose");

const AttackSurfaceSchema = new mongoose.Schema(
  {
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
      // required: [true, "Attack Surface screenshot required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "Attack Surface mitigationSteps required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AttackSurface", AttackSurfaceSchema);
