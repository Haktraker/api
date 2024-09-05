const NonComplianceGapsOverview = require("../../models/Reports/Non-ComplianceGapsOverview");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/non-compliance-gaps-overview
// @access    private
exports.createNonComplianceGapsOverview = factory.create(
  NonComplianceGapsOverview
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/non-compliance-gaps-overview/:id
// @access    Public
exports.getNonComplianceGapsOverview = factory.getOne(
  NonComplianceGapsOverview
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/non-compliance-gaps-overview
// @access    Public
exports.getNonComplianceGapsOverviews = factory.getAll(
  NonComplianceGapsOverview
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/non-compliance-gaps-overview/:id
// @access    private
exports.updateNonComplianceGapsOverview = factory.updateOne(
  NonComplianceGapsOverview
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/non-compliance-gaps-overview/:id
// @access    private

exports.deleteNonComplianceGapsOverview = factory.deleteOne(
  NonComplianceGapsOverview
);
