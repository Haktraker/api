const mongoose = require("mongoose");

const DarkWebMentionsSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
    },
    source: {
      type: String,
    },
    mitigationSteps: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DarkWebMentions", DarkWebMentionsSchema);
