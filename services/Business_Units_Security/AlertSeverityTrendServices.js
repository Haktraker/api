const AlertSeverityTrend = require("../../models/Business_Units_Security/AlertSeverityTrend");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create AlertSeverityTrend
// @route     POST /api/bu-security/alert-severity-trends
// @access    private
exports.createAlertSeverityTrend = factory.create(AlertSeverityTrend);

// @desc      Get Specific AlertSeverityTrend by id
// @route     GET /api/bu-security/alert-severity-trends/:id
// @access    Public
exports.getAlertSeverityTrend = factory.getOne(AlertSeverityTrend);

// @desc      Get List Of AlertSeverityTrend
// @route     GET /api/bu-security/alert-severity-trends
// @access    Public
exports.getAlertSeverityTrends = factory.getAll(AlertSeverityTrend);

// @desc      Update AlertSeverityTrend
// @route     PATCH /api/bu-security/alert-severity-trends/:id
// @access    private
exports.updateAlertSeverityTrend = factory.updateOne(AlertSeverityTrend);

// @desc      Delete AlertSeverityTrend
// @route     DELETE /api/bu-security/alert-severity-trends/:id
// @access    private

exports.deleteAlertSeverityTrend = factory.deleteOne(AlertSeverityTrend);
