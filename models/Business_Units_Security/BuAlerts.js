const mongoose = require("mongoose");

const BuAlertsSchema = new mongoose.Schema(
  {
    bu: {
      type: String,
    },
    high: {
      count: {
        type: Number,
      },
      highComment: {
        type: String,
      },
    },
    medium: {
      count: {
        type: Number,
      },
      mediumComment: {
        type: String,
      },
    },
    low: {
      count: {
        type: Number,
      },
      lowComment: {
        type: String,
      },
    },
    critical: {
      count: {
        type: Number,
      },
      criticalComment: {
        type: String,
      },
    },
    month: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BuAlerts", BuAlertsSchema);
