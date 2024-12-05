const mongoose = require("mongoose");

const FrameWorkInfo = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    frameWorks: [
      {
        frame_work_name: {
          type: String,
          enum: ["ISO 27001", "NIST CSF", "PDPL", "CIS Controls"],
        },
        frame_work_header: {
          type: String,
        },
        frame_work_subtitle: { type: String },
        bu: [
          {
            bu_name: { type: String },
            bu_id: { type: String },
            bu_status: { type: String, enum: ["Compliant", "Non-Compliant"] },
            gap_discription: { type: String },
            affected_systems: { type: [String] },
            severity: {
              type: String,
              enum: ["Critical", "High", "Medium", "Low"],
            },
            mitigation_plan: {
              short_term_actions: { type: String },
              long_term_strategy: { type: String },
              time_line: { type: String },
              budget: { type: String },
              progress: { type: Number },
              required_resources: { type: String },
            },
            _id: false,
          },
        ],
        _id: false,
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("FrameWorkInfo", FrameWorkInfo);
