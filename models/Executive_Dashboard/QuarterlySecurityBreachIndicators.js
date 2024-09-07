const mongoose = require("mongoose");

const QuarterlySecurityBreachIndicators = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Security Breach Indicators month required"],
      trim: true,
    },
    year: { type: String }, // Add year field
    quarter: { type: Number, required: [true, "quarter required"] },

    score: {
      type: String,
      required: [true, "Security Breach Indicators Score required"],
    },
    indicator: {
      type: String,
      enum: [
        "Compromised Employees",
        "Account Take Over",
        "3rd Party Leaked Credentials",
        "Brand Reputation",
      ],
      required: [true, "Security Breach Indicators indicator required"],
    },
  },
  { timestamps: true }
);

QuarterlySecurityBreachIndicators.index(
  { month: 1, indicator: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "QuarterlySecurityBreachIndicators",
  QuarterlySecurityBreachIndicators
);
