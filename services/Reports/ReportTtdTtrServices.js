const ReportTtdTtr = require("../../models/Reports/ReportTtdTtr");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/reports/ttd-ttr
// @access    private
exports.createReportTtdTtr = factory.create(ReportTtdTtr);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/reports/ttd-ttr/:id
// @access    Public
exports.getReportTtdTtr = factory.getOne(ReportTtdTtr);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/reports/ttd-ttr
// @access    Public
exports.getReportTtdTtrs = factory.getAll(ReportTtdTtr);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/reports/ttd-ttr/:id
// @access    private
exports.updateReportTtdTtr = factory.updateOne(ReportTtdTtr);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/reports/ttd-ttr/:id
// @access    private

exports.deleteReportTtdTtr = factory.deleteOne(ReportTtdTtr);
