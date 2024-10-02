const mongoose = require("mongoose");

const APTFeedsSchema = new mongoose.Schema(
  {
    aptGroupName: {
      type: String,
    },
    threatType: {
      type: String,
    },
    ttps: { type: String },
    targetSectors: {
      type: String,
    },
    geographicFocus: {
      type: String,
    },
    iocs: { type: String },
    source: { type: String },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("APTFeeds", APTFeedsSchema);
