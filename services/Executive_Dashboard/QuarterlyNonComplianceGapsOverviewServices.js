const QuarterlyNonComplianceGapsOverview = require("../../models/Executive_Dashboard/QuarterlyNonComplianceGapsOverview");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/non-compliance-gaps-overview
// @access    private
exports.createQuarterlyNonComplianceGapsOverview = factory.create(
  QuarterlyNonComplianceGapsOverview
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/non-compliance-gaps-overview/:id
// @access    Public
exports.getQuarterlyNonComplianceGapsOverview = factory.getOne(
  QuarterlyNonComplianceGapsOverview
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/non-compliance-gaps-overview
// @access    Public
exports.getQuarterlyNonComplianceGapsOverviews = factory.getAll(
  QuarterlyNonComplianceGapsOverview
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/non-compliance-gaps-overview/:id
// @access    private
exports.updateQuarterlyNonComplianceGapsOverview = factory.updateOne(
  QuarterlyNonComplianceGapsOverview
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/non-compliance-gaps-overview/:id
// @access    private

exports.deleteQuarterlyNonComplianceGapsOverview = factory.deleteOne(
  QuarterlyNonComplianceGapsOverview
);
