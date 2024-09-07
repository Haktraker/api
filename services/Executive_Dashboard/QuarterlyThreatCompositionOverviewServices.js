const QuarterlyThreatCompositionOverview = require("../../models/Executive_Dashboard/QuarterlyThreatCompositionOverview");
const factory = require("../handlersFactory");

// @desc      Create Quarterly Threat Composition Overview
// @route     POST /api/executive-dashboard/threat-composition-overview
// @access    private
exports.createQuarterlyThreatCompositionOverview = factory.create(
  QuarterlyThreatCompositionOverview
);

// @desc      Get Specific Quarterly Threat Composition Overview by id
// @route     GET /api/executive-dashboard/threat-composition-overview/:id
// @access    Public
exports.getQuarterlyThreatCompositionOverview = factory.getOne(
  QuarterlyThreatCompositionOverview
);

// @desc      Get List Of Quarterly Threat Composition Overview
// @route     GET /api/executive-dashboard/threat-composition-overview
// @access    Public
exports.getQuarterlyThreatCompositionOverviews = factory.getAll(
  QuarterlyThreatCompositionOverview
);

// @desc      Update Quarterly Threat Composition Overview
// @route     PATCH /api/executive-dashboard/threat-composition-overview/:id
// @access    private
exports.updateQuarterlyThreatCompositionOverview = factory.updateOne(
  QuarterlyThreatCompositionOverview
);

// @desc      Delete Quarterly Threat Composition Overview
// @route     DELETE /api/executive-dashboard/threat-composition-overview/:id
// @access    private

exports.deleteQuarterlyThreatCompositionOverview = factory.deleteOne(
  QuarterlyThreatCompositionOverview
);
