const mongoose = require("mongoose");

const ReportSecurityEventSchema = new mongoose.Schema({
  bu: [
    {
      name: { type: String }, // Business Unit name (e.g., "CWC", "Alrashed Food", etc.)
      alertTypes: [
        {
          alertType: { type: String }, // Alert type (e.g., "Alert Volume", "Security Event")
          score: { type: Number }, // Score for the alert type
          alertVolume: { type: Number }, // Alert Volume score
          securityEvent: { type: Number }, // Security Event score
          incident: { type: Number }, // Incident score
          atoDarkWebASM: { type: Number }, // ATO/Dark Web/ASM score
        },
      ],
    },
  ],
  month: { type: String }, // Month of the report
  year: { type: String }, // Year of the report
});

// // Ensure unique combination of month and year
// ReportSecurityEventSchema.index(
//   {
//     month: 1,
//     year: 1,
//   },
//   { unique: true }
// );

module.exports = mongoose.model(
  "ReportSecurityEvent",
  ReportSecurityEventSchema
);
