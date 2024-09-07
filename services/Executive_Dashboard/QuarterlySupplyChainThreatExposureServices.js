const QuarterlySupplyChainThreatExposure = require("../../models/Executive_Dashboard/QuarterlySupplyChainThreatExposure");
const factory = require("../handlersFactory");

// @desc      Create Quarterly Supply Chain Threat Exposure
// @route     POST /api/executive-dashboard/supply-chain-threat-exposure
// @access    private
exports.createQuarterlySupplyChainThreatExposure = factory.create(
  QuarterlySupplyChainThreatExposure
);

// @desc      Get Specific Quarterly Supply Chain Threat Exposure by id
// @route     GET /api/executive-dashboard/supply-chain-threat-exposure/:id
// @access    Public
exports.getQuarterlySupplyChainThreatExposure = factory.getOne(
  QuarterlySupplyChainThreatExposure
);

// @desc      Get List Of Quarterly Supply Chain Threat Exposure
// @route     GET /api/executive-dashboard/supply-chain-threat-exposure
// @access    Public
exports.getQuarterlySupplyChainThreatExposures = factory.getAll(
  QuarterlySupplyChainThreatExposure
);

// @desc      Update Quarterly Supply Chain Threat Exposure
// @route     PATCH /api/executive-dashboard/supply-chain-threat-exposure/:id
// @access    private
exports.updateQuarterlySupplyChainThreatExposure = factory.updateOne(
  QuarterlySupplyChainThreatExposure
);

// @desc      Delete Quarterly Supply Chain Threat Exposure
// @route     DELETE /api/executive-dashboard/supply-chain-threat-exposure/:id
// @access    private

exports.deleteQuarterlySupplyChainThreatExposure = factory.deleteOne(
  QuarterlySupplyChainThreatExposure
);
