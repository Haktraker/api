const ReportThreatBreakDown = require("../../models/Reports/ReportThreatBreakDown");
const factory = require("../handlersFactory");

// @desc      Create Report Threat Break Down
// @route     POST /api/reports/threat-breakdown
// @access    private
exports.createReportThreatBreakDown = factory.create(ReportThreatBreakDown);

// @desc      Get Specific Report Threat Break Down by id
// @route     GET /api/reports/threat-breakdown/:id
// @access    Public
exports.getReportThreatBreakDown = factory.getOne(ReportThreatBreakDown);

// @desc      Get List Of Report Threat Break Down
// @route     GET /api/reports/threat-breakdown
// @access    Public
exports.getReportThreatBreakDowns = factory.getAll(ReportThreatBreakDown);

// @desc      Update Report Threat Break Down
// @route     PATCH /api/reports/threat-breakdown/:id
// @access    private
exports.updateReportThreatBreakDown = factory.updateOne(ReportThreatBreakDown);

// @desc      Delete Report Threat Break Down
// @route     DELETE /api/reports/threat-breakdown/:id
// @access    private

exports.deleteReportThreatBreakDown = factory.deleteOne(ReportThreatBreakDown);
