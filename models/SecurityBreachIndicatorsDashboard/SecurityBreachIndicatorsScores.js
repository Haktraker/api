const mongoose = require("mongoose");

const SecurityBreachIndicatorsScoresSchema = new mongoose.Schema(
  {
    month: { type: String },
    year: { type: String },
    scores: [
      {
        metric_name: {
          type: String,
          enum: [
            "Network Score",
            "Cloud Score",
            "Endpoint Score",
            "Identity Score",
            "Data Protection Score",
          ],
        },
        metric_score: { type: Number },
      }
    ],
    over_all_score: { type: Number }
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "SecurityBreachIndicatorsScores",
  SecurityBreachIndicatorsScoresSchema
);
