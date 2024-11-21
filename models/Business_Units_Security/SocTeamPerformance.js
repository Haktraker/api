const mongoose = require("mongoose");

const SocTeamPerformance = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    socTeam: [
      {
        teamName: { type: String },
        bu: [
          {
            buName: { type: String },
            resolutionRate: { type: Number },
            accuracy: { type: Number },
            incidentsHandled: { type: Number },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("SocTeamPerformance", SocTeamPerformance);
