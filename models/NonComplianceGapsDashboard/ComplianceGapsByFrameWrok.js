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
        severity: [
          {
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
        ],
        framework: [
          {
            frameworkName: {
              type: String,
              enum: ["ISO 27001", "NIST CSF", "PDPL", "CIS Controls"],
            },
            frameworkScore: {
              type: Number,
              default: 0,
            },
            status: {
              type: String,
              enum: ["Compliant", "Non-Compliant"],
              default: "Non-Compliant",
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
