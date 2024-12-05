const ComplianceTrend = require("../../models/NonComplianceGapsDashboard/ComplianceTrend");
const factory = require("../handlersFactory");

// @desc      Create Compliance Trend
// @route     POST /api/non-compliance-gaps-dashboard/compliance-trend
// @access    private
exports.createComplianceTrend = factory.create(
  ComplianceTrend
);

// @desc      Get Specific Compliance Trend by id
// @route     GET /api/non-compliance-gaps-dashboard/compliance-trend/:id
// @access    Public
exports.getComplianceTrend = factory.getOne(
  ComplianceTrend
);

// @desc      Get List Of Compliance Trend
// @route     GET /api/non-compliance-gaps-dashboard/compliance-trend
// @access    Public
exports.getComplianceTrends = factory.getAll(
  ComplianceTrend
);

// @desc      Update Compliance Trend
// @route     PATCH /api/non-compliance-gaps-dashboard/compliance-trend/:id
// @access    private
exports.updateComplianceTrend = factory.updateOne(
  ComplianceTrend
);

// @desc      Delete Compliance Trend
// @route     DELETE /api/non-compliance-gaps-dashboard/compliance-trend/:id
// @access    private

exports.deleteComplianceTrend = factory.deleteOne(
  ComplianceTrend
);
