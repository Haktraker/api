const mongoose = require("mongoose");

const ExecutiveVipProtection = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
      required: [true, "Executive Vip Protection detectionTime required"],
    },
    user: {
      type: String,
      required: [true, "Executive Vip Protection user required"],
    },
    password: {
      type: String,
      required: [true, "Executive Vip Protection password required"],
    },
    url: {
      type: String,
      required: [true, "Executive Vip Protection url required"],
    },
    bu: {
      type: String,
      required: [true, "Executive Vip Protection bu required"],
    },
    source: {
      type: String,
      required: [true, "Executive Vip Protection source required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "Executive Vip Protection mitigationSteps required"],
    },
    screenshot: {
      type: String,
      required: [true, "Executive Vip Protection screenshot required"],
    },
    status: {
      type: String,
      enum: ["investigating", "resolved", "unresolved"],
      default: "unresolved",
      required: [true, "Executive Vip Protection status required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ExecutiveVipProtection",
  ExecutiveVipProtection
);
