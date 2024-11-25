const mongoose = require("mongoose");

const ReportSecurityBreachIndicators = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
    },
    year: { type: String }, // Add year field
    indicators: [
      {
        indicatorName: {
          type: String,
          enum: [
            "Compromised Employees",
            "Account Take Over",
            "3rd Party Leaked Credentials",
            "Brand Reputation",
          ],
        },
        score: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ReportSecurityBreachIndicators",
  ReportSecurityBreachIndicators
);
