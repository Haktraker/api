const mongoose = require("mongoose");

const QuarterlyCyberAttackTrendsSchema = new mongoose.Schema({
  month: {
    type: String,
  },
  day: {
    type: Number,
  },
  count: {
    type: Number,
  },
  quarter: { type: Number },

  year: { type: String }, // Add year field
});

module.exports = mongoose.model(
  "QuarterlyCyberAttackTrends",
  QuarterlyCyberAttackTrendsSchema
);
