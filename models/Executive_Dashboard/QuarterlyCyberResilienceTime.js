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

module.exports = mongoose.model(
  "QuarterlyCyberResilienceTime",
  QuarterlyCyberResilienceTime
);
