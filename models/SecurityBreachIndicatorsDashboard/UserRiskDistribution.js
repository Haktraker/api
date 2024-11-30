const mongoose = require("mongoose");

const UserRiskDistribution = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    bu: [
      {
        buName: {
          type: String,
        },
        severities: [
          {
            severity: {
              type: String,
              enum: ["Critical", "High", "Low", "Medium"],
            },
            count: { type: Number },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserRiskDistribution", UserRiskDistribution);
