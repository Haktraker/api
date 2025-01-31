const mongoose = require("mongoose");

const QuarterlySecurityBreachIndicators = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
    },
    year: { type: String }, // Add year field
    quarter: { type: Number },

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


module.exports = mongoose.model(
  "QuarterlySecurityBreachIndicators",
  QuarterlySecurityBreachIndicators
);
