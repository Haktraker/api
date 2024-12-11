const mongoose = require("mongoose");

const AccountTakeoverSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
    },
    user: {
      type: String,
    },
    password: {
      type: String,
    },
    url: { type: String },
    bu: { type: String },
    source: {
      type: String,
    },
    mitigationSteps: {
      type: String,
    },
    screenshot: {
      type: String,
    },
    sampleFile: {
      type: String,
    },
    status: {
      type: String,
      enum: ["investigating", "resolved", "unresolved"],
      default: "unresolved",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AccountTakeover", AccountTakeoverSchema);
