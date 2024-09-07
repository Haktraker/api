const ReportMonthlyIncident = require("../../models/Reports/ReportMonthlyIncident");
const factory = require("../handlersFactory");

// @desc      Create Security Posture Score
// @route     POST /api/reports/monthly-incident
// @access    private
exports.createReportMonthlyIncident = factory.create(ReportMonthlyIncident);

// @desc      Get Specific Security Posture Score by id
// @route     GET /api/reports/monthly-incident/:id
// @access    Public
exports.getReportMonthlyIncident = factory.getOne(ReportMonthlyIncident);

// @desc      Get List Of Security Posture Score
// @route     GET /api/reports/monthly-incident
// @access    Public
exports.getReportMonthlyIncidents = factory.getAll(ReportMonthlyIncident);

// @desc      Update Security Posture Score
// @route     PATCH /api/reports/monthly-incident/:id
// @access    private
exports.updateReportMonthlyIncident = factory.updateOne(ReportMonthlyIncident);

// @desc      Delete Security Posture Score
// @route     DELETE /api/reports/monthly-incident/:id
// @access    private

exports.deleteReportMonthlyIncident = factory.deleteOne(ReportMonthlyIncident);
