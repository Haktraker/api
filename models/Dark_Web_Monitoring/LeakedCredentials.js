const mongoose = require("mongoose");

const LeakedCredentialsSchema = new mongoose.Schema(
  {
    detectionTime: {
      type: Date,
    },
    user: {
      type: String,
    },
    password: {
      type: String,
    },
    source: {
      type: String,
    },
    mitigationSteps: {
      type: String,
    },
    bu: { type: String },
    status: {
      type: String,
      enum: ["investigating", "resolved", "unresolved"],
      default: "unresolved",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LeakedCredentials", LeakedCredentialsSchema);
