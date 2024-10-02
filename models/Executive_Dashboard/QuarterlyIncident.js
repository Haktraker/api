const mongoose = require("mongoose");

const Quarterlyincident = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
      unique: true, // Ensure the month field is unique
    },
    score: {
      type: String,
    },
    year: { type: String }, // Add year field
    quarter: { type: Number },
  },
  { timestamps: true }
);

Quarterlyincident.index({ month: 1 }, { unique: true });

module.exports = mongoose.model("Quarterlyincident", Quarterlyincident);
