const ReportSecurityBreachIndicators = require("../../models/Reports/ReportSecurityBreachIndicators");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/reports/security-breach-indicators
// @access    private
exports.createReportSecurityBreachIndicators = factory.create(
  ReportSecurityBreachIndicators
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/reports/security-breach-indicators/:id
// @access    Public
exports.getReportSecurityBreachIndicator = factory.getOne(
  ReportSecurityBreachIndicators
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/reports/security-breach-indicators
// @access    Public
exports.getReportSecurityBreachIndicators = factory.getAll(
  ReportSecurityBreachIndicators
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/reports/security-breach-indicators/:id
// @access    private
exports.updateReportSecurityBreachIndicators = factory.updateOne(
  ReportSecurityBreachIndicators
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/reports/security-breach-indicators/:id
// @access    private

exports.deleteReportSecurityBreachIndicators = factory.deleteOne(
  ReportSecurityBreachIndicators
);
