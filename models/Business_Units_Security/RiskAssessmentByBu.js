const mongoose = require("mongoose");

const RiskAssessmentByBu = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    bu:[ {
      name: { type: String },
      severities: [
        {
          severity: {
            type: String,
            enum: ["Critical", "High", "Low", "Medium"],
          },
          count: { type: Number },
        },
      ],
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("RiskAssessmentByBu", RiskAssessmentByBu);
