const mongoose = require("mongoose");

const SlaComplianceSchema = new mongoose.Schema({
  totalAlertVolume: {
    type: Number,
    required: [true, "SLA Compliance total Alert Volume required"],
  },
  detectionTime: {
    type: Number,
    required: [true, "SLA Compliance detection Time required"],
  },
  responseTime: {
    type: Number,
    required: [true, "SLA Compliance response Time required"],
  },
  resolutionTime: {
    type: Number,
    required: [true, "SLA Compliance resolution Time required"],
  },
  falsePositiveRate: {
    type: Number,
    required: [true, "SLA Compliance false Positive Rate required"],
  },
  alertTriageEfficiency: {
    type: Number,
    required: [true, "SLA Compliance alert Triage Efficiency required"],
  },
  slaCompliance: {
    type: Number,
    required: [true, "SLA Compliance slaCompliance required"],
  },
  customerSatisfaction: {
    type: Number,
    required: [true, "SLA Compliance customer Satisfaction required"],
  },
  score: {
    type: Number,
    required: [true, "SLA Compliance Score required"],
  },
  year: {
    type: String,
    required: [true, "SLA Compliance year required"],
  },
  month: {
    type: String,
    required: [true, "SLA Compliance month required"],
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
