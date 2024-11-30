const mongoose = require("mongoose");

const securityIssueSchema = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    bu: [
      {
        buName: { type: String },
        severity: {
          type: String,
          enum: ["Critical", "High", "Medium", "Low"], // Restrict values to valid severity levels
        },
        vendor: {
          type: String,
        },
        issue: {
          type: String,
        },
        daysOpen: {
          type: Number, // Number of days the issue has been open
        },
        description: {
          type: String,
        },
        affectedSystems: {
          type: [String], // Array of system names
        },
        recommendedAction: {
          type: String,
        },
        lastUpdated: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

// Create and export the model

module.exports = mongoose.model("SecurityIssue", securityIssueSchema);
