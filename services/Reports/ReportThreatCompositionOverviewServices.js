const ReportThreatCompositionOverview = require("../../models/Reports/ReportThreatCompositionOverview");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/reports/threat-composition-overview
// @access    private
exports.createReportThreatCompositionOverview = factory.create(
  ReportThreatCompositionOverview
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/reports/threat-composition-overview/:id
// @access    Public
exports.getReportThreatCompositionOverview = factory.getOne(
  ReportThreatCompositionOverview
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/reports/threat-composition-overview
// @access    Public
exports.getReportThreatCompositionOverviews = factory.getAll(
  ReportThreatCompositionOverview
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/reports/threat-composition-overview/:id
// @access    private
exports.updateReportThreatCompositionOverview = factory.updateOne(
  ReportThreatCompositionOverview
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/reports/threat-composition-overview/:id
// @access    private

exports.deleteReportThreatCompositionOverview = factory.deleteOne(
  ReportThreatCompositionOverview
);
