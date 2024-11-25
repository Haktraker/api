const mongoose = require("mongoose");

const ReportCyberAttackTrendsSchema = new mongoose.Schema({
  month: {
    type: String,
  },
  day: {
    type: Number,
  },
  count: {
    type: Number,
  },
  year: { type: String }, // Add year field
});

// ReportCyberAttackTrendsSchema.index(
//   { day: 1, month: 1, year: 1 },
//   { unique: true }
// );

module.exports = mongoose.model(
  "ReportCyberAttackTrends",
  ReportCyberAttackTrendsSchema
);
