const mongoose = require("mongoose");

const QuarterlyCyberSecurityTrends = new mongoose.Schema(
  {
    score: {
      type: String,
    },
    trigger: {
      type: String,
    },
    issue: {
      type: String,
    },
    solutions: [String],
    year: { type: String }, // Add year field
    month: { type: String }, // Add month field
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "QuarterlyCyberSecurityTrends",
  QuarterlyCyberSecurityTrends
);
