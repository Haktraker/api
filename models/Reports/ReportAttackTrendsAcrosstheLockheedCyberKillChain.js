const mongoose = require("mongoose");

const ReportAttackTrendsAcrosstheLockheedCyberKillChain = new mongoose.Schema(
  {
    Reconnaissance: { type: Number },
    Weaponization: { type: Number },
    Delivery: { type: Number },
    Exploitation: { type: Number },
    Installation: { type: Number },
    CommandandControl: { type: Number },
    ActionsOnObjectives: { type: Number },
    month: { type: String, required: true }, // Month of the report
    year: { type: String, required: true }, // Year of the report
  },
  { timestamps: true }
);

ReportAttackTrendsAcrosstheLockheedCyberKillChain.index(
  { year: 1, month: 1 },
  { unique: true }
);
module.exports = mongoose.model(
  "ReportAttackTrendsAcrosstheLockheedCyberKillChain",
  ReportAttackTrendsAcrosstheLockheedCyberKillChain
);
