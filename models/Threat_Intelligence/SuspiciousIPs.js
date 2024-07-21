const mongoose = require("mongoose");

const SuspiciousIPsSchema = new mongoose.Schema(
  {
    value: { type: String, required: [true, "IP value required"] },
    source: { type: String, required: [true, "IP source required"] },
    description: {
      type: String,
      required: [true, "SuspiciousIP description required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuspiciousIPs", SuspiciousIPsSchema);
