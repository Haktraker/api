const mongoose = require("mongoose");

const RealTimeActivityFeed = new mongoose.Schema(
  {
    activity: {
      type: String,
    },
    comment: {
      type: String,
    },
    month: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RealTimeActivityFeed", RealTimeActivityFeed);
