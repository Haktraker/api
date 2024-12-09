const mongoose = require("mongoose");

const IOCsSchema = new mongoose.Schema(
  {
    iOCType: {
      type: String,
      enum: ["hash", "ip", "domain", "url"],
    },
    indicatorValue: {
      type: String,
    },
    threatType: { type: String },
    source: { type: String },
    description: { type: String },
    time: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IOCs", IOCsSchema);
