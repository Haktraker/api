const QuarterlySecurityBreachIndicators = require("../../models/Executive_Dashboard/QuarterlySecurityBreachIndicators");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/security-breach-indicators
// @access    private
exports.createQuarterlySecurityBreachIndicators = factory.create(
  QuarterlySecurityBreachIndicators
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/security-breach-indicators/:id
// @access    Public
exports.getQuarterlySecurityBreachIndicators = factory.getOne(
  QuarterlySecurityBreachIndicators
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/security-breach-indicators
// @access    Public
exports.getQuarterlySecurityBreachIndicatorss = factory.getAll(
  QuarterlySecurityBreachIndicators
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/security-breach-indicators/:id
// @access    private
exports.updateQuarterlySecurityBreachIndicators = factory.updateOne(
  QuarterlySecurityBreachIndicators
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/security-breach-indicators/:id
// @access    private

exports.deleteQuarterlySecurityBreachIndicators = factory.deleteOne(
  QuarterlySecurityBreachIndicators
);
