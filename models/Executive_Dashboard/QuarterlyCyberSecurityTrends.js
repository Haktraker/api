const mongoose = require("mongoose");

const QuarterlyCyberSecurityTrends = new mongoose.Schema(
  {
    score: {
      type: String,
      required: [true, "Cyber Security Trends score required"],
    },
    trigger: {
      type: String,
      required: [true, "Cyber Security Trends trigger required"],
    },
    issue: {
      type: String,
      required: [true, "Cyber Security Trends issue required"],
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
