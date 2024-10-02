const mongoose = require("mongoose");

const ReportSecurityBreachIndicators = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
    },
    year: { type: String }, // Add year field

    score: {
      type: String,
    },
    indicator: {
      type: String,
      enum: [
        "Compromised Employees",
        "Account Take Over",
        "3rd Party Leaked Credentials",
        "Brand Reputation",
      ],
    },
  },
  { timestamps: true }
);

ReportSecurityBreachIndicators.index(
  { month: 1, indicator: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "ReportSecurityBreachIndicators",
  ReportSecurityBreachIndicators
);
