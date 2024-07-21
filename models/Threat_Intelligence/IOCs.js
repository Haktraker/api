const mongoose = require("mongoose");

const IOCsSchema = new mongoose.Schema(
  {
    iOCType: {
      type: String,
      enum: ["hash", "ip", "domain", "url"],
      required: [true, "IOC iOCType required"],
    },
    indicatorValue: {
      type: String,
      required: [true, "IOC indicatorValue required"],
    },
    threatType: { type: String, required: [true, "IOC threatType required"] },
    source: { type: String, required: [true, "IOC source required"] },
    description: { type: String, required: [true, "IOC description required"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IOCs", IOCsSchema);
