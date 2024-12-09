const mongoose = require("mongoose");

const GeoWatch = new mongoose.Schema(
  {
    eventType: {
      type: String,
    },
    location: {
      type: String,
    },
    country: {
      type: String,
    },
    region: {
      type: String,
    },
    time: {
      type: Date,
    },
    source: {
      type: String,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
    },
    assetAffected: {
      type: String,
    },
    customAlertsTriggered: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["unresolved", "resolved", "investigating"],
    },
    actionTaken: {
      type: String,
    },
    commentsNotes: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("GeoWatch", GeoWatch);
