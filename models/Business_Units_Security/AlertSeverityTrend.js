const mongoose = require("mongoose");
const alertSeverityTrendSchema = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    critical: { type: Number },
    high: { type: Number },
    medium: { type: Number },
    low: { type: Number },
    bu: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AlertSeverityTrend", alertSeverityTrendSchema);
