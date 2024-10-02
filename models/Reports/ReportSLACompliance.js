const mongoose = require("mongoose");

const SlaComplianceSchema = new mongoose.Schema({
  totalAlertVolume: {
    type: Number,
  },
  detectionTime: {
    type: Number,
  },
  responseTime: {
    type: Number,
  },
  resolutionTime: {
    type: Number,
  },
  falsePositiveRate: {
    type: Number,
  },
  alertTriageEfficiency: {
    type: Number,
  },
  slaCompliance: {
    type: Number,
  },
  customerSatisfaction: {
    type: Number,
  },
  score: {
    type: Number,
  },
  year: {
    type: String,
  },
  month: {
    type: String,
  },
});

SlaComplianceSchema.index(
  {
    month: 1,
    year: 1,
  },
  { unique: true }
);

module.exports = mongoose.model("SlaCompliance", SlaComplianceSchema);
