const mongoose = require("mongoose");

const AnomalyCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    enum: [
      "Unusual Login Time",
      "Data Exfiltration",
      "Privilege Escalation",
      "Multiple Failed Logins",
      "Unusual File Access",
      "Abnormal Network Traffic",
    ],
  },
  value: {
    type: Number,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
});

module.exports = mongoose.model(
  "AnomalyCategoryDistribution",
  AnomalyCategorySchema
);
