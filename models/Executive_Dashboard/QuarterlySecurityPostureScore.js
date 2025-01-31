const mongoose = require("mongoose");

const QuarterlySecurityPostureScore = new mongoose.Schema(
  {
    percentage: {
      type: String,
    },
    score: {
      type: String,
    },
    year: { type: String }, // Add year field
    month: { type: String }, // Add month field
    quarter: { type: Number },
  },
  { timestamps: true }
);


module.exports = mongoose.model(
  "QuarterlySecurityPostureScore",
  QuarterlySecurityPostureScore
);
