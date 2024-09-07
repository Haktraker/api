const ReportAttackTrend = require("../../models/Reports/ReportAttackTrend");
const factory = require("../handlersFactory");

// @desc      Create ReportAttackTrend
// @route     POST /api/reports/attack-trend
// @access    private
exports.createReportAttackTrend = factory.create(ReportAttackTrend);

// @desc      Get Specific ReportAttackTrend by id
// @route     GET /api/attack-trend/:id
// @access    Public
exports.getReportAttackTrend = factory.getOne(ReportAttackTrend);

// @desc      Get List Of ReportAttackTrend
// @route     GET /api/attack-trend
// @access    Public
exports.getReportAttackTrends = factory.getAll(ReportAttackTrend);

// @desc      Update ReportAttackTrend
// @route     PATCH /api/attack-trend/:id
// @access    private
exports.updateReportAttackTrend = factory.updateOne(ReportAttackTrend);

// @desc      Delete ReportAttackTrend
// @route     DELETE /api/attack-trend/:id
// @access    private

exports.deleteReportAttackTrend = factory.deleteOne(ReportAttackTrend);
