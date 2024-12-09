const mongoose = require("mongoose");

const SuspiciousIPsSchema = new mongoose.Schema(
  {
    value: { type: String },
    source: { type: String },
    description: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuspiciousIPs", SuspiciousIPsSchema);
