const mongoose = require("mongoose");

const NetworkAnomalies = mongoose.Schema(
  {
    year: { type: "string" },
    month: { type: "string" },
    days: [
      {
        dayNumber: {
          type: "number",
        },
        score: {
          type: "number",
        },
        _id: false,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("NetworkAnomalies", NetworkAnomalies);
