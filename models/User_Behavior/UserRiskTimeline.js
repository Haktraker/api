const mongoose = require("mongoose");

const UserRiskTimeline = new mongoose.Schema(
  {
    risk: {
      month: {
        type: String,
      },
      day: {
        type: Number,
        min: 1,
        max: 31, // Maximum days in a month
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

const UserRisk = mongoose.model("UserRiskTimeline", UserRiskTimeline);

module.exports = UserRisk;
