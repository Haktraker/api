const ReportNonComplianceGapsOverview = require("../../models/Reports/ReportNonComplianceGapsOverview");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/reports/non-compliance-gaps-overview
// @access    private
exports.createReportNonComplianceGapsOverview = factory.create(
  ReportNonComplianceGapsOverview
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/reports/non-compliance-gaps-overview/:id
// @access    Public
exports.getReportNonComplianceGapsOverview = factory.getOne(
  ReportNonComplianceGapsOverview
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/reports/non-compliance-gaps-overview
// @access    Public
exports.getReportNonComplianceGapsOverviews = factory.getAll(
  ReportNonComplianceGapsOverview
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/reports/non-compliance-gaps-overview/:id
// @access    private
exports.updateReportNonComplianceGapsOverview = factory.updateOne(
  ReportNonComplianceGapsOverview
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/reports/non-compliance-gaps-overview/:id
// @access    private

exports.deleteReportNonComplianceGapsOverview = factory.deleteOne(
  ReportNonComplianceGapsOverview
);
