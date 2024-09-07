const ReportCyberResilienceTime = require("../../models/Reports/ReportCyberResilienceTime");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/reports/executive-dashboard/cyber-resilience-time
// @access    private
exports.createReportCyberResilienceTime = factory.create(
  ReportCyberResilienceTime
);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/reports/executive-dashboard/cyber-resilience-time/:id
// @access    Public
exports.getReportCyberResilienceTime = factory.getOne(
  ReportCyberResilienceTime
);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/reports/executive-dashboard/cyber-resilience-time
// @access    Public
exports.getReportCyberResilienceTimes = factory.getAll(
  ReportCyberResilienceTime
);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/reports/executive-dashboard/cyber-resilience-time/:id
// @access    private
exports.updateReportCyberResilienceTime = factory.updateOne(
  ReportCyberResilienceTime
);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/reports/executive-dashboard/cyber-resilience-time/:id
// @access    private

exports.deleteReportCyberResilienceTime = factory.deleteOne(
  ReportCyberResilienceTime
);
