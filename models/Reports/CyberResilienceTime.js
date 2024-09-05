const mongoose = require("mongoose");

const CyberResilienceTime = new mongoose.Schema(
  {
    hours: {
      type: String,
      required: [true, "Cyber Resilience Time hours required"],
    },
    month: {
      type: String,
      required: [true, "Cyber Resilience Time month required"],
    },
    year: { type: String }, // Add year field
  },
  { timestamps: true }
);

CyberResilienceTime.index({ hours: 1, month: 1 }, { unique: true });

module.exports = mongoose.model("CyberResilienceTime", CyberResilienceTime);
