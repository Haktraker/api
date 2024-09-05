const mongoose = require("mongoose");

const SecurityPostureScore = new mongoose.Schema(
  {
    percentage: {
      type: String,
      required: [true, "Security Posture Percentage required"],
    },
    score: {
      type: String,
      required: [true, "Security Posture Score required"],
    },
    year: { type: String }, // Add year field
    month: { type: String }, // Add month field
  },
  { timestamps: true }
);
SecurityPostureScore.index({ percentage: 1, score: 1 }, { unique: true });

module.exports = mongoose.model("SecurityPostureScore", SecurityPostureScore);
