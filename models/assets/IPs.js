const mongoose = require("mongoose");

const IPsSchema = new mongoose.Schema(
  {
    value: { type: String },
    location: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IPs", IPsSchema);
