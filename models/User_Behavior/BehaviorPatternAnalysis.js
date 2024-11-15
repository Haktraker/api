const mongoose = require("mongoose");

const BehavioralPatternSchema = new mongoose.Schema(
  {
    businessUnit: {
      type: String,
      enum: [
        "HO/DR",
        "CWC",
        "RAMAT",
        "EFS",
        "ETS",
        "Alrashed Food",
        "Alrashed Tires",
        "Jana Marine / Tanajib",
        "Industrials (Steel, Fast)",
        "Alrashed Wood",
        "Admirals",
        "YAUMI",
        "BMD",
        "Saudi Filter",
        "cement",
        "Insuwrap",
        "EFS/ETS",
        "Ubmksa",
        "Polystyrene",
      ],
      trim: true,
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
