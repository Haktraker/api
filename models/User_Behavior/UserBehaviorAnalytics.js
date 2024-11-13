const mongoose = require("mongoose");

const UserBehaviorAnalytics = new mongoose.Schema(
  {
    criticalAlerts: {
      type: Number,
    },
    AvgRiskScore: {
      type: Number,
    },
    suspiciousUsers: {
      type: Number,
    },
    dataAccessAnomalies: {
      type: Number,
    },
    networkAnomalies: {
      type: Number,
    },
    responseTime: {
      type: Number,
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

module.exports = mongoose.model("UserBehaviorAnalytics", UserBehaviorAnalytics);
