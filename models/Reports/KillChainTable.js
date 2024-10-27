const mongoose = require("mongoose");

const KillChainTableSchema = new mongoose.Schema(
  {
    threatID: {
      type: String,
    },
    threatType: {
      type: String,
      enum: [
        "Phishing",
        "Malware",
        "Spear Phishing Email",
        "Macro Exploit",
        "Backdoor Installation",
        "C2 Communication",
        "Data Exfiltration",
      ],
    },
    phase: {
      type: String,
      enum: [
        "Reconnaissance",
        "Weaponization",
        "Delivery",
        "Exploitation",
        "Installation",
        "Command and Control",
        "Actions on Objectives",
      ],
    },
    description: {
      type: String,
    },
    severity: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
    },
    affectedSystems: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["Completed", "In Progress", "Mitigated"],
    },
    attackProgression: {
      currentPhase: {
        type: String,
        enum: [
          "Reconnaissance",
          "Weaponization",
          "Delivery",
          "Exploitation",
          "Installation",
          "Command and Control",
          "Actions on Objectives",
        ],
      },
      nextPhase: {
        type: String,
        enum: [
          "Reconnaissance",
          "Weaponization",
          "Delivery",
          "Exploitation",
          "Installation",
          "Command and Control",
          "Actions on Objectives",
        ],
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("KillChainTable", KillChainTableSchema);
