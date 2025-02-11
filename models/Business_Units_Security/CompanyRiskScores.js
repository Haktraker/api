const mongoose = require("mongoose");

const CompanyRiskScoresSchema = new mongoose.Schema(
  {
    bus: [
      {
        name: {
          type: String,
        },
        count: {
          type: Number,
        },
      },
    ],
    month: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CompanyRiskScores", CompanyRiskScoresSchema);
