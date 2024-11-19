const mongoose = require("mongoose");

const CompanyRiskScoresSchema = new mongoose.Schema(
  {
    bus: [
      {
        name: {
          type: String,
          required: true,
        },
        count: {
          type: Number,
          required: true,
        },
      },
    ],
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CompanyRiskScores", CompanyRiskScoresSchema);
