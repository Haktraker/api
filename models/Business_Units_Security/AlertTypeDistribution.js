const mongoose = require("mongoose");

const AlertTypeDistribution = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    bu: [
      {
        buName: { type: String },
        alert: [
          {
            name: {
              type: String,
              enum: ["Malware", "Phishing", "Auth Failure", "Policy Violation", "Data Exfil"],
            },
            count: { type: Number },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("AlertTypeDistribution", AlertTypeDistribution);
