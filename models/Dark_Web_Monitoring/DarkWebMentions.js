const mongoose = require("mongoose");

const DarkWebMentionsSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: [true, "Dark Web Mention source required"],
    },
    mitigationSteps: {
      type: String,
      required: [true, "Dark Web Mention mitigation Steps required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DarkWebMentions", DarkWebMentionsSchema);
