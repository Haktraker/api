const mongoose = require('mongoose');

const ComplianceScore = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    bu: [
      {
        buName: { type: String },
        compliances:[
            {
                complianceName: { type: String },
                score: { type: Number },
            }
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('ComplianceScore', ComplianceScore);

