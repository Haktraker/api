const mongoose = require("mongoose");

const DomainsSchema = new mongoose.Schema(
  {
    value: { type: String, required: [true, "Domain value required"] },
    location: { type: String, required: [true, "Domain location required"] },
    description: {
      type: String,
      required: [true, "Domain description required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Domains", DomainsSchema);
