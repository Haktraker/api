const mongoose = require("mongoose");

const GeoWatch = new mongoose.Schema(
  {
    eventType: {
      type: String,
      required: [true, " geo watch event type required"],
    },
    location: {
      type: String,
      required: [true, " geo watch location required"],
    },
    country: {
      type: String,
      required: [true, " geo watch country required"],
    },
    region: {
      type: String,
      required: [true, " geo watch region required"],
    },
    detectionTime: {
      type: Date,
      required: [true, " geo watch detection Time required"],
    },
    source: {
      type: String,
      required: [true, " geo watch source required"],
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: [true, " geo watch severity required"],
    },
    assetAffected: {
      type: String,
      required: [true, " geo watch asset affected required"],
    },
    customAlertsTriggered: {
      type: Boolean,
      required: [true, "geo watch custom Alerts Triggered required"],
      default: false,
    },
    status: {
      type: String,
      enum: ["unresolved", "resolved", "investigating"],
      required: [true, " geo watch status required"],
    },
    actionTaken: {
      type: String,
      required: [true, " geo watch action Taken required"],
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
