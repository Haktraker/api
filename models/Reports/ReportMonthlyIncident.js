const mongoose = require("mongoose");

const ReportMonthlyIncident = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Monthly Incident month required"],
      trim: true,
      unique: true, // Ensure the month field is unique
    },
    score: {
      type: String,
      required: [true, "Monthly Incident Score required"],
    },
    year: { type: String }, // Add year field
  },
  { timestamps: true }
);

ReportMonthlyIncident.index({ month: 1 }, { unique: true });

module.exports = mongoose.model("ReportMonthlyIncident", ReportMonthlyIncident);
