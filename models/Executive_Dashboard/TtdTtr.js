const mongoose = require("mongoose");

const TtdTtr = new mongoose.Schema(
  {
    month: {
      type: String,
      required: [true, "TtdTtr month required"],
      trim: true,
    },
    score: {
      type: String,
      required: [true, "TtdTtr Score required"],
    },
    indicator: {
      type: String,
      enum: ["TTD", "TTR"],
      required: [true, "TtdTtr Compliance Type required"],
    },
  },
  { timestamps: true }
);

TtdTtr.index({ month: 1, indicator: 1 }, { unique: true });

module.exports = mongoose.model("TtdTtr", TtdTtr);
