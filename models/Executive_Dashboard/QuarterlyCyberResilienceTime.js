const mongoose = require("mongoose");

const QuarterlyCyberResilienceTime = new mongoose.Schema(
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
    quarter: { type: Number, required: [true, "quarter required"] },
  },
  { timestamps: true }
);

QuarterlyCyberResilienceTime.index({ hours: 1, month: 1 }, { unique: true });

module.exports = mongoose.model(
  "QuarterlyCyberResilienceTime",
  QuarterlyCyberResilienceTime
);
