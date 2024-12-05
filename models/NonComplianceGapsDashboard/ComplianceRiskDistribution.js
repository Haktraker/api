const mongoose = require("mongoose");

const ComplianceRiskDistribution = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    bu: [
      {
        buName: { type: String },
        severity: {
          severityName: {
            type: String,
            enum: ["High", "Medium", "Low", "Critical"],
            default: "Low",
          },
          score: {
            type: Number,
            default: 0,
          },
        },
        _id:false
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ComplianceRiskDistribution",
  ComplianceRiskDistribution
);
