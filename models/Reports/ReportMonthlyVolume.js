const mongoose = require("mongoose");

const ReportMonthlyVolumeSchema = new mongoose.Schema({
  month: { type: String },
  year: { type: String }, // Add year field

  securityEvents: { type: String },
  alertVolume: { type: String },
  incidents: { type: String },
  darkWeb: { type: String },
  attackSurface: { type: String },
  ato: { type: String },
  thirdPartyLeaks: { type: String },
});



module.exports = mongoose.model(
  "ReportMonthlyVolume",
  ReportMonthlyVolumeSchema
);
