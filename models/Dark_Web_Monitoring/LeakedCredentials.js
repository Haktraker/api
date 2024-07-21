const mongoose = require("mongoose");

const LeakedCredentialsSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, "Leaked Credentials user required"],
    },
    password: {
      type: String,
      required: [true, "Leaked Credentials password required"],
    },
    source: {
      type: String,
      required: [true, "Leaked Credentials source required"],
    },
    bu: { type: String, required: [true, "Leaked Credentials bu required"] },
    mitigationSteps: {
      type: String,
      required: [true, "Leaked Credentials mitigationSteps required"],
    },
    leakDate: {
      type: Date,
      required: [true, "Leaked Credentials leakDate required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LeakedCredentials", LeakedCredentialsSchema);
