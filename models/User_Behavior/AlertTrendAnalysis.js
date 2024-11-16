const mongoose = require("mongoose");

const AlertTrendAnalysis = new mongoose.Schema(
  {
    risk: {
      month: {
        type: String,
      },
      week: {
        type: Number,
        min: 1,
        max: 4, // Maximum days in a month
      },
      severity: {
        type: String,
        enum: ["low", "medium", "high", "critical"],
      },
      year: {
        type: String,
      },
      count: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

// Adding a pre-save middleware to update the `updatedAt` field automatically

module.exports = mongoose.model("AlertTrendAnalysis", AlertTrendAnalysis);
