const mongoose = require("mongoose");

const UserBehaviorPatternAnalysis = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    Normal: {
      type: Number,
    },
    Suspicious: {
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

module.exports = mongoose.model(
  "UserBehaviorPatternAnalysis",
  UserBehaviorPatternAnalysis
);
