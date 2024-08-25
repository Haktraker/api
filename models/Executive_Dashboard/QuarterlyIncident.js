const mongoose = require("mongoose");

const QuarterlyIncident = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Quarterly Incident month required"],
      trim: true,
    },
    score: {
      type: String,
      required: [true, "Quarterly Incident Score required"],
    },
  },
  { timestamps: true }
);

QuarterlyIncident.index({ month: 1, score: 1 }, { unique: true });

module.exports = mongoose.model("QuarterlyIncident", QuarterlyIncident);
