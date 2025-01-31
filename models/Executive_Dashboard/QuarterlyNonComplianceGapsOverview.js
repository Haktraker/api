const mongoose = require("mongoose");

const QuarterlyNonComplianceGapsOverview = new mongoose.Schema(
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
    quarter: { type: Number },
  },
  { timestamps: true }
);


module.exports = mongoose.model(
  "QuarterlyNonComplianceGapsOverview",
  QuarterlyNonComplianceGapsOverview
);
