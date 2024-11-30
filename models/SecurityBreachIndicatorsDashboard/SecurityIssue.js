const mongoose = require("mongoose");

const securityIssueSchema = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    severity: {
      type: String,
      required: true,
      enum: ["Critical", "High", "Medium", "Low"], // Restrict values to valid severity levels
    },
    vendor: {
      type: String,
      required: true,
    },
    issue: {
      type: String,
      required: true,
    },
    daysOpen: {
      type: Number, // Number of days the issue has been open
      required: true,
      min: 0,
    },
    description: {
      type: String,
      default: null, // Optional field
    },
    affectedSystems: {
      type: [String], // Array of system names
      default: [], // Defaults to an empty array
    },
    recommendedAction: {
      type: String,
      default: null, // Optional field
    },
    lastUpdated: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

// Create and export the model

module.exports = mongoose.model("SecurityIssue", securityIssueSchema);

