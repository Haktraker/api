const UserRiskDistribution = require("../../models/SecurityBreachIndicatorsDashboard/UserRiskDistribution");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/security-breach-indicators-dashboard/user-risk-distribution
// @access    private
exports.createUserRiskDistribution = factory.create(UserRiskDistribution);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/security-breach-indicators-dashboard/user-risk-distribution/:id
// @access    Public
exports.getUserRiskDistribution = factory.getOne(UserRiskDistribution);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/security-breach-indicators-dashboard/user-risk-distribution
// @access    Public
exports.getUserRiskDistributions = factory.getAll(UserRiskDistribution);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/security-breach-indicators-dashboard/user-risk-distribution/:id
// @access    private
exports.updateUserRiskDistribution = factory.updateOne(UserRiskDistribution);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/security-breach-indicators-dashboard/user-risk-distribution/:id
// @access    private

exports.deleteUserRiskDistribution = factory.deleteOne(UserRiskDistribution);
