const mongoose = require("mongoose");

const PortalsSchema = new mongoose.Schema(
  {
    value: { type: String, required: [true, "Portal value required"] },
    location: { type: String, required: [true, "Portal location required"] },
    description: {
      type: String,
      required: [true, "Portal description required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Portals", PortalsSchema);
