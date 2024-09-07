const ReportCyberSecurityTrends = require("../../models/Reports/ReportCyberSecurityTrends");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/reports/executive-dashboard/cyber-security-trends
// @access    private
exports.createReportCyberSecurityTrends = factory.create(
  ReportCyberSecurityTrends
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/reports/executive-dashboard/cyber-security-trends/:id
// @access    Public
exports.getReportCyberSecurityTrend = factory.getOne(ReportCyberSecurityTrends);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/reports/executive-dashboard/cyber-security-trends
// @access    Public
exports.getReportCyberSecurityTrends = factory.getAll(
  ReportCyberSecurityTrends
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/reports/executive-dashboard/cyber-security-trends/:id
// @access    private
exports.updateReportCyberSecurityTrends = factory.updateOne(
  ReportCyberSecurityTrends
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/reports/executive-dashboard/cyber-security-trends/:id
// @access    private

exports.deleteReportCyberSecurityTrends = factory.deleteOne(
  ReportCyberSecurityTrends
);
