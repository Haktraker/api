const SecurityIssue = require("../../models/SecurityBreachIndicatorsDashboard/SecurityIssue");
const factory = require("../handlersFactory");

// @desc      Create SecurityIssue
// @route     POST /api/security-breach-indicators-dashboard/security-issue
// @access    private
exports.createSecurityIssue = factory.create(SecurityIssue);

// @desc      Get Specific SecurityIssue by id
// @route     GET /api/security-breach-indicators-dashboard/security-issue/:id
// @access    Public
exports.getSecurityIssue = factory.getOne(SecurityIssue);

// @desc      Get List Of SecurityIssue
// @route     GET /api/security-breach-indicators-dashboard/security-issue
// @access    Public
exports.getSecurityIssues = factory.getAll(SecurityIssue);

// @desc      Update SecurityIssue
// @route     PATCH /api/security-breach-indicators-dashboard/security-issue/:id
// @access    private
exports.updateSecurityIssue = factory.updateOne(SecurityIssue);

// @desc      Delete SecurityIssue
// @route     DELETE /api/security-breach-indicators-dashboard/security-issue/:id
// @access    private

exports.deleteSecurityIssue = factory.deleteOne(SecurityIssue);
