const mongoose = require("mongoose");

const DomainsSchema = new mongoose.Schema(
  {
    value: { type: String },
    location: { type: String },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Domains", DomainsSchema);
