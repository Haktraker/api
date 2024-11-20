const mongoose = require("mongoose");

const BUIncidentResponseMetrics = new mongoose.Schema(
  {
    month: {
      type: String,
    },
    year: {
      type: String,
    },
    bu: [
      {
        name: {
          type: String,
        },
        indicators: [
          {
            indicator: {
              type: String,
              enum: ["MTTD", "MTTR", "MTTA"],
            },
            score: {
              type: Number,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "BUIncidentResponseMetrics",
  BUIncidentResponseMetrics
);
