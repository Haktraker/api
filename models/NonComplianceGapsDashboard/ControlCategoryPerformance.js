const mongoose = require("mongoose");

const ControlCategoryPerformance = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    bu: [
      {
        bu_name: {
          type: String,
        },
        categories: [
          {
            category: {
              type: String,
              enum: [
                "Access Control",
                "Data Protection",
                "Network Security",
                "Asset Management",
                "Incident Response",
                "Business Continuity",
              ],
            },
            score: {
              type: Number,
            },
            _id: false,
          },
        ],
        _id: false,
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "ControlCategoryPerformance",
  ControlCategoryPerformance
);
