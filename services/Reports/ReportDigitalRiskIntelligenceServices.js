const ReportDigitalRiskIntelligence = require("../../models/Reports/ReportDigitalRiskIntelligence");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/digital-risk-intelligence
// @access    private
exports.createReportDigitalRiskIntelligence = factory.create(
  ReportDigitalRiskIntelligence
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/digital-risk-intelligence/:id
// @access    Public
exports.getReportDigitalRiskIntelligence = factory.getOne(
  ReportDigitalRiskIntelligence
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/digital-risk-intelligence
// @access    Public
exports.getReportDigitalRiskIntelligences = factory.getAll(
  ReportDigitalRiskIntelligence
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/digital-risk-intelligence/:id
// @access    private
exports.updateReportDigitalRiskIntelligence = factory.updateOne(
  ReportDigitalRiskIntelligence
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/digital-risk-intelligence/:id
// @access    private

exports.deleteReportDigitalRiskIntelligence = factory.deleteOne(
  ReportDigitalRiskIntelligence
);
