const ReportSupplyChainThreatExposure = require("../../models/Reports/ReportSupplyChainThreatExposure");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/reports/supply-chain-threat-exposure
// @access    private
exports.createReportSupplyChainThreatExposure = factory.create(
  ReportSupplyChainThreatExposure
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/reports/supply-chain-threat-exposure/:id
// @access    Public
exports.getReportSupplyChainThreatExposure = factory.getOne(
  ReportSupplyChainThreatExposure
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/reports/supply-chain-threat-exposure
// @access    Public
exports.getReportSupplyChainThreatExposures = factory.getAll(
  ReportSupplyChainThreatExposure
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/reports/supply-chain-threat-exposure/:id
// @access    private
exports.updateReportSupplyChainThreatExposure = factory.updateOne(
  ReportSupplyChainThreatExposure
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/reports/supply-chain-threat-exposure/:id
// @access    private

exports.deleteReportSupplyChainThreatExposure = factory.deleteOne(
  ReportSupplyChainThreatExposure
);
