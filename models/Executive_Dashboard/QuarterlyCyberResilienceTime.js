const mongoose = require("mongoose");

const QuarterlyCyberResilienceTime = new mongoose.Schema(
  {
    hours: {
      type: String,
    },
    month: {
      type: String,
    },
    year: { type: String }, // Add year field
    quarter: { type: Number },
  },
  { timestamps: true }
);

QuarterlyCyberResilienceTime.index({ hours: 1, month: 1 }, { unique: true });

module.exports = mongoose.model(
  "QuarterlyCyberResilienceTime",
  QuarterlyCyberResilienceTime
);
