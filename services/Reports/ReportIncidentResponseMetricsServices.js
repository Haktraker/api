const ReportIncidentResponseMetrics = require("../../models/Reports/ReportIncidentResponseMetrics");
const factory = require("../handlersFactory");

// @desc      Create Incident Response Metrics
// @route     POST /api/reports/incident-response-metrics
// @access    private
exports.createReportIncidentResponseMetric = factory.create(
  ReportIncidentResponseMetrics
);

// @desc      Get Specific Incident Response Metrics by id
// @route     GET /api/reports/incident-response-metrics/:id
// @access    Public
exports.getReportIncidentResponseMetric = factory.getOne(
  ReportIncidentResponseMetrics
);

// @desc      Get List Of Incident Response Metrics
// @route     GET /api/reports/incident-response-metrics
// @access    Public
exports.getReportIncidentResponseMetrics = factory.getAll(
  ReportIncidentResponseMetrics
);

// @desc      Update Incident Response Metrics
// @route     PATCH /api/reports/incident-response-metrics/:id
// @access    private
exports.updateReportIncidentResponseMetric = factory.updateOne(
  ReportIncidentResponseMetrics
);

// @desc      Delete Incident Response Metrics
// @route     DELETE /api/reports/incident-response-metrics/:id
// @access    private

exports.deleteReportIncidentResponseMetric = factory.deleteOne(
  ReportIncidentResponseMetrics
);
