const mongoose = require("mongoose");

const PortalsSchema = new mongoose.Schema(
  {
    value: { type: String },
    location: { type: String },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Portals", PortalsSchema);
