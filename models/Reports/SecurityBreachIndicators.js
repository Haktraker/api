const mongoose = require("mongoose");

const SecurityBreachIndicators = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "Security Breach Indicators month required"],
      trim: true,
    },
    year: { type: String }, // Add year field

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

SecurityBreachIndicators.index({ month: 1, indicator: 1 }, { unique: true });

module.exports = mongoose.model(
  "SecurityBreachIndicators",
  SecurityBreachIndicators
);
