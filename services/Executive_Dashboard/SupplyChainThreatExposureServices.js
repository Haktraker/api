const SupplyChainThreatExposure = require("../../models/Reports/SupplyChainThreatExposure");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/supply-chain-threat-exposure
// @access    private
exports.createSupplyChainThreatExposure = factory.create(
  SupplyChainThreatExposure
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/supply-chain-threat-exposure/:id
// @access    Public
exports.getSupplyChainThreatExposure = factory.getOne(
  SupplyChainThreatExposure
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/supply-chain-threat-exposure
// @access    Public
exports.getSupplyChainThreatExposures = factory.getAll(
  SupplyChainThreatExposure
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/supply-chain-threat-exposure/:id
// @access    private
exports.updateSupplyChainThreatExposure = factory.updateOne(
  SupplyChainThreatExposure
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/supply-chain-threat-exposure/:id
// @access    private

exports.deleteSupplyChainThreatExposure = factory.deleteOne(
  SupplyChainThreatExposure
);
