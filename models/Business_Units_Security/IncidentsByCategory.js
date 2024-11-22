const mongoose = require("mongoose");

const IncidentsByCategory = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    bu: [
      {
        buName: { type: String },
        incident: [
          {
            name: {
              type: String,
              enum: ["Malware", "Phishing", "Data Breach", "Access Violation"],
            },
            resolved: { type: Number },
            pending: { type: Number },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("IncidentsByCategory", IncidentsByCategory);
