const ReportThirdPartyThreat = require("../../models/Reports/ReportThirdPartyThreat");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/reports/third-party-threat
// @access    private
exports.createReportThirdPartyThreat = factory.create(ReportThirdPartyThreat);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/reports/third-party-threat/:id
// @access    Public
exports.getReportThirdPartyThreat = factory.getOne(ReportThirdPartyThreat);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/reports/third-party-threat
// @access    Public
exports.getReportThirdPartyThreats = factory.getAll(ReportThirdPartyThreat);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/reports/third-party-threat/:id
// @access    private
exports.updateReportThirdPartyThreat = factory.updateOne(
  ReportThirdPartyThreat
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/reports/third-party-threat/:id
// @access    private

exports.deleteReportThirdPartyThreat = factory.deleteOne(
  ReportThirdPartyThreat
);
