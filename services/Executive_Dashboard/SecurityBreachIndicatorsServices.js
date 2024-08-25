const SecurityBreachIndicators = require("../../models/Executive_Dashboard/SecurityBreachIndicators");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/security-breach-indicators
// @access    private
exports.createSecurityBreachIndicators = factory.create(
  SecurityBreachIndicators
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/security-breach-indicators/:id
// @access    Public
exports.getSecurityBreachIndicators = factory.getOne(
  SecurityBreachIndicators
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/security-breach-indicators
// @access    Public
exports.getSecurityBreachIndicatorss = factory.getAll(
  SecurityBreachIndicators
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/security-breach-indicators/:id
// @access    private
exports.updateSecurityBreachIndicators = factory.updateOne(
  SecurityBreachIndicators
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/security-breach-indicators/:id
// @access    private

exports.deleteSecurityBreachIndicators = factory.deleteOne(
  SecurityBreachIndicators
);
