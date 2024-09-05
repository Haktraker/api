const mongoose = require("mongoose");

const AttackTrendSchema = new mongoose.Schema({
  tactic: { type: String, required: true },
  techniqueId: { type: String, required: true },
  count: { type: Number, required: true },
  month: { type: String, required: true }, // Add month field
  year: { type: String }, // Add year field
});

AttackTrendSchema.index({ tactic: 1, month: 1 }, { unique: true });

module.exports = mongoose.model("AttackTrend", AttackTrendSchema);
