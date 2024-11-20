const mongoose = require("mongoose");

const VulnerabilitiesAndPatched = new mongoose.Schema(
  {
    year: {
      type: String,
    },
    month: {
      type: String,
    },
    vulnerabilities: [
      {
        id: { type: String },
        severity: {
          type: String,
          enum: ["Low", "Medium", "High", "Critical"],
        },
        total: { type: Number },
        patched: { type: Number },
      },
    ],
    bu: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "VulnerabilitiesAndPatched",
  VulnerabilitiesAndPatched
);
