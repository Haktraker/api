const mongoose = require("mongoose");

const ComplianceGapsByFrameWorkSchema = new mongoose.Schema(
  {
    month: {
      type: String,
    },
    year: {
      type: String,
    },
    bu: [
      {
        bu_name: {
          type: String,
        },
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
        framework: [
          {
            frameworkName: {
              type: String,
              enum: ["Non-Compliant", "Compliant"],
              default: "Compliant",
            },
            frameworkScore: {
              type: Number,
              default: 0,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ComplianceGapsByFrameWork",
  ComplianceGapsByFrameWorkSchema
);
