const mongoose = require("mongoose");

const ReportNonComplianceGapsOverviewSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Non Compliance Gaps Overview month required"],
    },
    compliance: {
      type: String,
      enum: ["MITRE ATT&CK", "ISO 27001", "NIST CSF", "PDPL", "SAMA"],
      required: [true, "Compliance Type required"],
    },
    score: {
      type: String,
      required: [true, "Non Compliance Gaps Overview Score required"],
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
