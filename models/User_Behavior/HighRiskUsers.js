const mongoose = require("mongoose");

const HighRiskUsersSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  riskScore: {
    type: Number,
  },
  incidents: {
    type: Number,
  },
  bu: {
    type: String,
    enum: [
      "HO/DR",
      "CWC",
      "RAMAT",
      "EFS",
      "ETS",
      "Alrashed Food",
      "Alrashed Tires",
      "Jana Marine / Tanajib",
      "Industrials (Steel, Fast)",
      "Alrashed Wood",
      "Admirals",
      "YAUMI",
      "BMD",
      "Saudi Filter",
      "cement",
      "Insuwrap",
      "EFS/ETS",
      "Ubmksa",
      "Polystyrene",
    ],
    trim: true,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
});

module.exports = mongoose.model("HighRiskUsers", HighRiskUsersSchema);
