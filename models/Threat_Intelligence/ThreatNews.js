const mongoose = require("mongoose");

const ThreatNews = new mongoose.Schema(
  {
    threatType: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ThreatNews", ThreatNews);
