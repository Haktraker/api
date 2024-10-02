const mongoose = require("mongoose");

const ReportNonComplianceGapsOverviewSchema = new mongoose.Schema(
  {
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
    year: { type: String }, // Add year field
  },
  { timestamps: true }
);

// Add compound unique index on month and compliance
ReportNonComplianceGapsOverviewSchema.index(
  { month: 1, compliance: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "ReportNonComplianceGapsOverview",
  ReportNonComplianceGapsOverviewSchema
);
