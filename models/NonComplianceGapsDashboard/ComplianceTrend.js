const mongoose = require("mongoose");

const ComplianceTrend = new mongoose.Schema(
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
        compliance: [
          {
            complianceName: {
              type: String,
              enum: ["ISO 27001", "NIST CSF", "PDPL", "CIS Controls"],
            },
            complianceScore: {
              type: Number,
            },
            _id: false,
          },
        ],
        _id: false,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ComplianceTrend", ComplianceTrend);
