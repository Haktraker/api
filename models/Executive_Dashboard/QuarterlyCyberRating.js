const mongoose = require("mongoose");

const QuarterlyCyberRatingSchema = new mongoose.Schema({
  category: { type: String },
  current: { type: Number },
  desired: { type: Number },
  month: { type: String }, // Add month field
  year: { type: String }, // Add year field
  quarter: { type: Number, required: [true, "quarter required"] },
});


module.exports = mongoose.model(
  "QuarterlyCyberRating",
  QuarterlyCyberRatingSchema
);
