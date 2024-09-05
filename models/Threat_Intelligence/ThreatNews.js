const mongoose = require("mongoose");

const ThreatNews = new mongoose.Schema(
  {
    threatType: {
      type: String,
      required: [true, "ThreatNews threatType required"],
    },
    description: {
      type: String,
      required: [true, "ThreatNews description required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ThreatNews", ThreatNews);
