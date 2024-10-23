const ReportThreatImpactOverView = require("../../models/Reports/ReportThreatImpactOverView");
const factory = require("../handlersFactory");

// @desc      Create  Threat Impact OverView
// @route     POST /api/reports/threat-impact-overView
// @access    private
exports.createReportThreatImpactOverView = factory.create(
  ReportThreatImpactOverView
);

// @desc      Get Specific  Threat Impact OverView by id
// @route     GET /api/reports/threat-impact-overView/:id
// @access    Public
exports.getReportThreatImpactOverView = factory.getOne(
  ReportThreatImpactOverView
);

// @desc      Get List Of  Threat Impact OverView
// @route     GET /api/reports/threat-impact-overView
// @access    Public
exports.getReportThreatImpactOverViews = factory.getAll(
  ReportThreatImpactOverView
);

// @desc      Update  Threat Impact OverView
// @route     PATCH /api/reports/threat-impact-overView/:id
// @access    private
exports.updateReportThreatImpactOverView = factory.updateOne(
  ReportThreatImpactOverView
);

// @desc      Delete  Threat Impact OverView
// @route     DELETE /api/reports/threat-impact-overView/:id
// @access    private

exports.deleteReportThreatImpactOverView = factory.deleteOne(
  ReportThreatImpactOverView
);
