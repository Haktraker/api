const mongoose = require("mongoose");

const DarkWebMentionsSchema = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    mention: {
      type: String,
    },
    source: {
      type: String, // Example: 'Deep Web Russian Forums'
    },
    chronologyTags: {
      type: String, // Example: '19 May, 2021: 10:10 AM'
    },
    impactEvaluation: {
      type: String, // Example: 'Low', 'High', etc.
    },
    threatGeolocation: {
      type: String, // Example: 'Russia/DarkTrader22'
    },
    asset: {
      type: String, // Example: 'owa.alrashed.com', 'X1', etc.
    },
    mitigationSteps: {
      type: String,
    },
    type: {
      type: String,
      enum: ["credentials", "corporate assets", "brand mentions"],
    },
    details: {
      user: {
        type: String,
      },
      password: {
        type: String,
      },
      timestamp: {
        type: Date,
      },
      riskLevel: {
        type: String,
        enum: ["low", "high", "medium", "critical"],
      },
      dataType: {
        type: String, // Example: 'Credentials', 'Corporate Assets', etc.
      },
      url: {
        type: String, // Example: 'owa.alrashed.com'
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DarkWebMentions", DarkWebMentionsSchema);
