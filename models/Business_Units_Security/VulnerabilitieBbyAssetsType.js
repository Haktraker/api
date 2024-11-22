const mongoose = require("mongoose");

const SeveritySchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["Low", "Medium", "High", "Critical"],
  },
  count: {
    type: Number,
  },
});

const AssetTypeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  severities: {
    type: [SeveritySchema],
  },
});

const BusinessUnitSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  assetTypes: {
    type: [AssetTypeSchema],
  },
});

const VulnerabilityByAssetTypeSchema = new mongoose.Schema(
  {
    month: {
      type: String,
    },
    year: {
      type: String,
    },
    businessUnits: {
      type: [BusinessUnitSchema],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "VulnerabilityByAssetType",
  VulnerabilityByAssetTypeSchema
);
