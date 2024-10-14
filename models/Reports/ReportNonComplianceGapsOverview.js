const mongoose = require("mongoose");

const ReportNonComplianceGapsOverviewSchema = new mongoose.Schema(
  {
    year: { type: String }, // Add year field
    month: {
      type: String,
    },
    compliance: {
      type: String,
      enum: ["MITRE ATT&CK", "ISO 27001", "NIST CSF", "PDPL", "CIS"],
    },
    score: {
      type: String,
    },
    details: [
      {
        quarter: { type: Number },
        issueName: { type: String }, // Add year field
        relatedStandard: { type: String }, // Add year field
        priorityLevel: {
          type: String,
          enum: ["low", "medium", "high", "critical"],
        }, // Add year field
        recommendation: { type: String }, // Add year field
        status: { type: String, enum: ["in progress", "open", "resolved"] }, // Add year field
        responsiblePerson: { type: String }, // Add year field
        user: { type: String },
        bu: { type: String },
      },
    ],
  },
  { timestamps: true }
);

// // Add compound unique index on month and compliance
// ReportNonComplianceGapsOverviewSchema.index(
//   { month: 1, compliance: 1 },
//   { unique: true }
// );

module.exports = mongoose.model(
  "ReportNonComplianceGapsOverview",
  ReportNonComplianceGapsOverviewSchema
);
