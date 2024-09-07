const ReportCyberAttackTrends = require("../../models/Reports/ReportCyberAttackTrends");
const factory = require("../handlersFactory");

// @desc      Create ReportCyberAttackTrends
// @route     POST /api/reports/cyber-attack-trends
// @access    private
exports.createReportCyberAttackTrends = factory.create(ReportCyberAttackTrends);

// @desc      Get Specific ReportCyberAttackTrends by id
// @route     GET /api/reports/cyber-attack-trends/:id
// @access    Public
exports.getReportCyberAttackTrend = factory.getOne(ReportCyberAttackTrends);

// @desc      Get List Of ReportCyberAttackTrends
// @route     GET /api/reports/cyber-attack-trends
// @access    Public
exports.getReportCyberAttackTrends = factory.getAll(ReportCyberAttackTrends);

// @desc      Update ReportCyberAttackTrends
// @route     PATCH /api/reports/cyber-attack-trends/:id
// @access    private
exports.updateReportCyberAttackTrends = factory.updateOne(
  ReportCyberAttackTrends
);

// @desc      Delete ReportCyberAttackTrends
// @route     DELETE /api/reports/cyber-attack-trends/:id
// @access    private

exports.deleteReportCyberAttackTrends = factory.deleteOne(
  ReportCyberAttackTrends
);
