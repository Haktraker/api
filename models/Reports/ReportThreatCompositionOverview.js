const mongoose = require("mongoose");

const ReportThreatCompositionOverview = new mongoose.Schema(
  {
    month: {
      type: String,
      trim: true,
    },
    year: {
      type: String,
      trim: true,
    }, // Year field

    severityLevel: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      trim: true,
    },
    threatType: {
      type: String,
      enum: [
        "Malware Variants",
        "Phishing Attempts",
        "Intrusion Attempts",
        "Insider Threats",
        "ATO",
        "Trojan and Malware",
        "3rd Party leaks",
        "Attack Surfaces",
      ],
      trim: true,
    },
    attackVector: {
      type: String,
      enum: [
        "Email",
        "Network Ports",
        "Social Engineering",
        "Applications",
        "Removable Media",
      ],
      trim: true,
    },
    bu: {
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
    affectedAsset: {
      type: String,
      trim: true,
    },
    incidentCount: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ReportThreatCompositionOverview",
  ReportThreatCompositionOverview
);
