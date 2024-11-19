const mongoose = require("mongoose");

const RecentSecurityEventsSchema = new mongoose.Schema(
  {
    bus: [
      {
        name: {
          type: String,
        },
        comment: {
          type: String,
        },
        severity:{
          type: String,
          enum: ["Low", "Medium", "High", "Critical"],
        }
      },
    ],
    month: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RecentSecurityEvents", RecentSecurityEventsSchema);
