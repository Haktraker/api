const mongoose = require("mongoose");

const QuarterlyAttackTrendSchema = new mongoose.Schema({
  tactic: { type: String, required: true },
  techniqueId: { type: String, required: true },
  count: { type: Number, required: true },
  quarter: { type: Number, required: [true, "quarter required"] },
  month: { type: String, required: true }, // Add month field
  year: { type: String }, // Add year field
});

QuarterlyAttackTrendSchema.index({ tactic: 1, month: 1 }, { unique: true });

module.exports = mongoose.model(
  "QuarterlyAttackTrend",
  QuarterlyAttackTrendSchema
);
