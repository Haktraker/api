const mongoose = require("mongoose");

const BehavioralPatternSchema = new mongoose.Schema(
  {
    businessUnit: {
      type: String,
    },
    outsideHoursAccess: {
      type: Number,
    },
    multipleDevices: {
      type: Number,
    },
    unusualDataTransfer: {
      type: Number,
    },
    unusualApplications: {
      type: Number,
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

module.exports = mongoose.model("BehavioralPattern", BehavioralPatternSchema);
