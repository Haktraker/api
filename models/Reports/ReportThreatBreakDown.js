const mongoose = require("mongoose");
const ReportThreatBreakDown = new mongoose.Schema({
  month: {
    type: String,
    trim: true,
  },
  year: { type: String, trim: true }, // Add year field,
  score: {
    type: Number,
    trim: true,
  },
  threatType: {
    type: String,
    trim: true,
    enum: [
      "Threat Type Distribution",
      "Kill Chain Phase Distribution",
      "Mitigation Status",
      "Attack Vector Breakdown",
    ],
  },
});

module.exports = mongoose.model("ReportThreatBreakDown", ReportThreatBreakDown);
