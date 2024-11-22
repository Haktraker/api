const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  activityName: {
    type: "string",
    enum: [
      "Active Connections",
      "Blocked Traffic",
      "SSL/TLS Traffic",
      "DNS Queries",
    ],
  },
  score: { type: "number" },
});

const BuSchem = new mongoose.Schema({
  buName: { type: "string" },
  activity: [ActivitySchema],
});

const NetworkSecurity = new mongoose.Schema(
  {
    month: { type: "string" },
    year: { type: "string" },
    bu: [BuSchem],
  },
  { timestamps: true }
);

module.exports = mongoose.model("NetworkSecurity", NetworkSecurity);
