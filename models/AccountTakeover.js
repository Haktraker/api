const mongoose = require("mongoose");

const AccountTakeoverSchema = new mongoose.Schema(
  {
    user: { type: String, required: [true, "Account Take over user required"] },
    password: {
      type: String,
      required: [true, "Account Take over password required"],
    },
    url: { type: String, required: [true, "Account Take over url required"] },
    bu: { type: String, required: [true, "Account Take over bu required"] },
    source: {
      type: String,
      required: [true, "Account Take over source required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "Account Take over mitigationSteps required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AccountTakeover", AccountTakeoverSchema);
