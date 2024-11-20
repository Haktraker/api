const mongoose = require("mongoose");

const UIncidentResponseMetrics = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
    },
    year: { type: String }, // Add year field
    score: {
      type: String,
    },
    indicator: {
      type: String,
      enum: ["MTTD", "MTTR", "MTTA"],
    },
  },
  { timestamps: true }
);

// UIncidentResponseMetrics.index({ month: 1, indicator: 1 }, { unique: true });

module.exports = mongoose.model(
  "UIncidentResponseMetrics",
  UIncidentResponseMetrics
);
