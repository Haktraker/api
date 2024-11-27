const mongoose = require("mongoose");

const SecurityIncidentTrend = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    bu: [
      {
        bu_name: {
          type: String,
        },
        incidents: [
          {
            incident_name: {
              type: String,
              enum: [
                "Malware",
                "Phishing",
                "DDos",
                "Data Breach",
                "Ransomware",
              ],
            },
            incident_score: {
              type: Number,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("SecurityIncidentTrend", SecurityIncidentTrend);
