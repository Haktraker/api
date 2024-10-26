const ReportThreatSeverityOverTime = require("../../models/Reports/ReportThreatSeverityOverTime");
const factory = require("../handlersFactory");

// @desc      Create Threat Severity OverTime
// @route     POST /api/reports/threat-severity-overtime
// @access    private
exports.createReportThreatSeverityOverTime = factory.create(
  ReportThreatSeverityOverTime
);

// @desc      Get Specific Threat Severity OverTime by id
// @route     GET /api/reports/threat-severity-overtime/:id
// @access    Public
exports.getReportThreatSeverityOverTime = factory.getOne(
  ReportThreatSeverityOverTime
);

// @desc      Get List Of Threat Severity OverTime
// @route     GET /api/reports/threat-severity-overtime
// @access    Public
exports.getReportThreatSeverityOverTimes = factory.getAll(
  ReportThreatSeverityOverTime
);

// @desc      Update Threat Severity OverTime
// @route     PATCH /api/reports/threat-severity-overtime/:id
// @access    private
exports.updateReportThreatSeverityOverTime = factory.updateOne(
  ReportThreatSeverityOverTime
);

// @desc      Delete Threat Severity OverTime
// @route     DELETE /api/reports/threat-severity-overtime/:id
// @access    private

exports.deleteReportThreatSeverityOverTime = factory.deleteOne(
  ReportThreatSeverityOverTime
);
