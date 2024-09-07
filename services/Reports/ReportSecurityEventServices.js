const ReportSecurityEvent = require("../../models/Reports/ReportSecurityEvent");
const factory = require("../handlersFactory");

// @desc      Create ReportSecurityEvent
// @route     POST /api/reports/security-event
// @access    private
exports.createReportSecurityEvent = factory.create(ReportSecurityEvent);

// @desc      Get Specific ReportSecurityEvent by id
// @route     GET /api/reports/security-event/:id
// @access    Public
exports.getReportSecurityEvent = factory.getOne(ReportSecurityEvent);

// @desc      Get List Of ReportSecurityEvent
// @route     GET /api/reports/security-event
// @access    Public
exports.getReportSecurityEvents = factory.getAll(ReportSecurityEvent);

// @desc      Update ReportSecurityEvent
// @route     PATCH /api/reports/security-event/:id
// @access    private
exports.updateReportSecurityEvent = factory.updateOne(ReportSecurityEvent);

// @desc      Delete ReportSecurityEvent
// @route     DELETE /api/reports/security-event/:id
// @access    private

exports.deleteReportSecurityEvent = factory.deleteOne(ReportSecurityEvent);
