const mongoose = require("mongoose");

const ReportUserBehavior = new mongoose.Schema({
  bu: [
    {
      name: { type: String, required: true }, // Business Unit name (e.g., "CWC", "Alrashed Food", etc.)
      alertTypes: [
        {
          alertType: { type: String, required: true }, // Alert type 
          score: { type: Number, required: true }, // Score for the alert type
          repeatedLoginFailuers: { type: Number }, //repeated Login Failuers score
          accessingSensitiveData: { type: Number }, // accessing Sensitive Data score
          unusualAccessPatterns: { type: Number }, // unusual Access Patterns score
          useOfUnauthorizedApps: { type: Number }, // use Of Unauthorized Apps score
        },
      ],
    },
  ],
  month: { type: String, required: true }, // Month of the report
  year: { type: String, required: true }, // Year of the report
});

// Ensure unique combination of month and year
ReportUserBehavior.index(
  {
    month: 1,
    year: 1,
  },
  { unique: true }
);

module.exports = mongoose.model("ReportUserBehavior", ReportUserBehavior);
