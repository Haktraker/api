const mongoose = require("mongoose");

const MttrMttcMttm = new mongoose.Schema(
  {
    month: { type: "string" },
    year: { type: "string" },
    category: {
      mtt: {
        name: {
          type: "string",
          default: "MTTR/MTTC/MTTM",
        },
        response: { type: Number },
        containment: { type: Number },
        mitigation: { type: Number },
      },
      detectionMetric: {
        name: {
          type: "string",
          default: "Detection Metrics",
        },
        falsePositiveRate: {
          type: Number,
        },
        escalationRate: { type: Number },
      },
      costMetric: {
        name: {
          type: "string",
          default: "Cost Metrics",
        },
        avgCostPerIncident: {
          type: Number,
        },
      },
      securityReadiness: {
        name: {
          type: "string",
          default: "Security Readiness",
        },
        securityReadinessScore: {
          type: Number,
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MttrMttcMttm", MttrMttcMttm);
