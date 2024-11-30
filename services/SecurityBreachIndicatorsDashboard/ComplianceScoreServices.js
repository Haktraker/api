const ComplianceScore = require("../../models/SecurityBreachIndicatorsDashboard/ComplianceScore");
const factory = require("../handlersFactory");

// @desc      Create Compliance Score
// @route     POST /api/security-breach-indicators-dashboard/compliance-score
// @access    private
exports.createComplianceScore = factory.create(ComplianceScore);

// @desc      Get Specific Compliance Score by id
// @route     GET /api/security-breach-indicators-dashboard/compliance-score/:id
// @access    Public
exports.getComplianceScore = factory.getOne(ComplianceScore);

// @desc      Get List Of Compliance Score
// @route     GET /api/security-breach-indicators-dashboard/compliance-score
// @access    Public
exports.getComplianceScores = factory.getAll(ComplianceScore);

// @desc      Update Compliance Score
// @route     PATCH /api/security-breach-indicators-dashboard/compliance-score/:id
// @access    private
exports.updateComplianceScore = factory.updateOne(ComplianceScore);

// @desc      Delete Compliance Score
// @route     DELETE /api/security-breach-indicators-dashboard/compliance-score/:id
// @access    private

exports.deleteComplianceScore = factory.deleteOne(ComplianceScore);
