const mongoose = require("mongoose");

const APTFeedsSchema = new mongoose.Schema(
  {
    aptGroupName: {
      type: String,
      required: [true, "APTFeed aptGroupName required"],
    },
    threatType: {
      type: String,
      required: [true, "APTFeed threatType required"],
    },
    ttps: { type: String, required: [true, "APTFeed ttps required"] },
    targetSectors: {
      type: String,
      required: [true, "APTFeed targetSectors required"],
    },
    geographicFocus: {
      type: String,
      required: [true, "APTFeed geographicFocus required"],
    },
    iocs: { type: String, required: [true, "APTFeed iocs required"] },
    source: { type: String, required: [true, "APTFeed source required"] },
    description: {
      type: String,
      required: [true, "APTFeed description required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("APTFeeds", APTFeedsSchema);
