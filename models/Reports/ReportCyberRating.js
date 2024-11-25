const mongoose = require("mongoose");

const ReportCyberRatingSchema = new mongoose.Schema({
  category: { type: String },
  current: { type: Number },
  desired: { type: Number },
  month: { type: String }, // Add month field
  year: { type: String }, // Add year field
});

// ReportCyberRatingSchema.index({ category: 1, month: 1 }, { unique: true });

module.exports = mongoose.model("ReportCyberRating", ReportCyberRatingSchema);
