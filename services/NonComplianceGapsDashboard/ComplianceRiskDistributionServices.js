const ComplianceRiskDistribution = require("../../models/NonComplianceGapsDashboard/ComplianceRiskDistribution");
const factory = require("../handlersFactory");

// @desc      Create Compliance Risk Distribution
// @route     POST /api/non-compliance-gaps-dashboard/compliance-risk-distribution
// @access    private
exports.createComplianceRiskDistribution = factory.create(
  ComplianceRiskDistribution
);

// @desc      Get Specific Compliance Risk Distribution by id
// @route     GET /api/non-compliance-gaps-dashboard/compliance-risk-distribution/:id
// @access    Public
exports.getComplianceRiskDistribution = factory.getOne(
  ComplianceRiskDistribution
);

// @desc      Get List Of Compliance Risk Distribution
// @route     GET /api/non-compliance-gaps-dashboard/compliance-risk-distribution
// @access    Public
exports.getComplianceRiskDistributions = factory.getAll(
  ComplianceRiskDistribution
);

// @desc      Update Compliance Risk Distribution
// @route     PATCH /api/non-compliance-gaps-dashboard/compliance-risk-distribution/:id
// @access    private
exports.updateComplianceRiskDistribution = factory.updateOne(
  ComplianceRiskDistribution
);

// @desc      Delete Compliance Risk Distribution
// @route     DELETE /api/non-compliance-gaps-dashboard/compliance-risk-distribution/:id
// @access    private

exports.deleteComplianceRiskDistribution = factory.deleteOne(
  ComplianceRiskDistribution
);
