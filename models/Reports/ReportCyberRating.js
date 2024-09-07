const mongoose = require("mongoose");

const ReportCyberRatingSchema = new mongoose.Schema({
  category: { type: String, required: true },
  current: { type: Number, required: true },
  desired: { type: Number, required: true },
  month: { type: String, required: true }, // Add month field
  year: { type: String }, // Add year field
});

ReportCyberRatingSchema.index({ category: 1, month: 1 }, { unique: true });

module.exports = mongoose.model("ReportCyberRating", ReportCyberRatingSchema);
