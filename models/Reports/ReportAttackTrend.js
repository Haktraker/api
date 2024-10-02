const mongoose = require("mongoose");

const ReportAttackTrendSchema = new mongoose.Schema({
  tactic: { type: String },
  techniqueId: { type: String },
  count: { type: Number },
  month: { type: String }, // Add month field
  year: { type: String }, // Add year field
});

ReportAttackTrendSchema.index({ tactic: 1, month: 1 }, { unique: true });

module.exports = mongoose.model("ReportAttackTrend", ReportAttackTrendSchema);
