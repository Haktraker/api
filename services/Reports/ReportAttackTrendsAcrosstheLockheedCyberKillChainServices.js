const ReportAttackTrendsAcrosstheLockheedCyberKillChain = require("../../models/Reports/ReportAttackTrendsAcrosstheLockheedCyberKillChain");
const factory = require("../handlersFactory");

// @desc      Create ReportAttackTrendsAcrosstheLockheedCyberKillChain
// @route     POST /api/reports/attack-trend
// @access    private
exports.createReportAttackTrendsAcrosstheLockheedCyberKillChain =
  factory.create(ReportAttackTrendsAcrosstheLockheedCyberKillChain);

// @desc      Get Specific ReportAttackTrendsAcrosstheLockheedCyberKillChain by id
// @route     GET /api/attack-trend/:id
// @access    Public
exports.getReportAttackTrendsAcrosstheLockheedCyberKillChain = factory.getOne(
  ReportAttackTrendsAcrosstheLockheedCyberKillChain
);

// @desc      Get List Of ReportAttackTrendsAcrosstheLockheedCyberKillChain
// @route     GET /api/attack-trend
// @access    Public
exports.getReportAttackTrendsAcrosstheLockheedCyberKillChains = factory.getAll(
  ReportAttackTrendsAcrosstheLockheedCyberKillChain
);

// @desc      Update ReportAttackTrendsAcrosstheLockheedCyberKillChain
// @route     PATCH /api/attack-trend/:id
// @access    private
exports.updateReportAttackTrendsAcrosstheLockheedCyberKillChain =
  factory.updateOne(ReportAttackTrendsAcrosstheLockheedCyberKillChain);

// @desc      Delete ReportAttackTrendsAcrosstheLockheedCyberKillChain
// @route     DELETE /api/attack-trend/:id
// @access    private

exports.deleteReportAttackTrendsAcrosstheLockheedCyberKillChain =
  factory.deleteOne(ReportAttackTrendsAcrosstheLockheedCyberKillChain);
