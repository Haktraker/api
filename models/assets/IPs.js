const mongoose = require("mongoose");

const IPsSchema = new mongoose.Schema(
  {
    value: { type: String, required: [true, "IP value required"] },
    location: { type: String, required: [true, "IP location required"] },
    description: { type: String, required: [true, "IP description required"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IPs", IPsSchema);
