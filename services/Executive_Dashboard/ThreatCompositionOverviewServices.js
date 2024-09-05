const ThreatCompositionOverview = require("../../models/Reports/ThreatCompositionOverview");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/threat-composition-overview
// @access    private
exports.createThreatCompositionOverview = factory.create(
  ThreatCompositionOverview
);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/threat-composition-overview/:id
// @access    Public
exports.getThreatCompositionOverview = factory.getOne(
  ThreatCompositionOverview
);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/threat-composition-overview
// @access    Public
exports.getThreatCompositionOverviews = factory.getAll(
  ThreatCompositionOverview
);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/threat-composition-overview/:id
// @access    private
exports.updateThreatCompositionOverview = factory.updateOne(
  ThreatCompositionOverview
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/threat-composition-overview/:id
// @access    private

exports.deleteThreatCompositionOverview = factory.deleteOne(
  ThreatCompositionOverview
);
