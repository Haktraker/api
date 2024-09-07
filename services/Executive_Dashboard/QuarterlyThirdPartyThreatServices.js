const QuarterlyThirdPartyThreat = require("../../models/Executive_Dashboard/QuarterlyThirdPartyThreat");
const factory = require("../handlersFactory");

// @desc      Create Quarterly Third Party Threat
// @route     POST /api/executive-dashboard/third-party-threat
// @access    private
exports.createQuarterlyThirdPartyThreat = factory.create(
  QuarterlyThirdPartyThreat
);

// @desc      Get Specific Quarterly Third Party Threat by id
// @route     GET /api/executive-dashboard/third-party-threat/:id
// @access    Public
exports.getQuarterlyThirdPartyThreat = factory.getOne(
  QuarterlyThirdPartyThreat
);

// @desc      Get List Of Quarterly Third Party Threat
// @route     GET /api/executive-dashboard/third-party-threat
// @access    Public
exports.getQuarterlyThirdPartyThreats = factory.getAll(
  QuarterlyThirdPartyThreat
);

// @desc      Update Quarterly Third Party Threat
// @route     PATCH /api/executive-dashboard/third-party-threat/:id
// @access    private
exports.updateQuarterlyThirdPartyThreat = factory.updateOne(
  QuarterlyThirdPartyThreat
);

// @desc      Delete Quarterly Third Party Threat
// @route     DELETE /api/executive-dashboard/third-party-threat/:id
// @access    private

exports.deleteQuarterlyThirdPartyThreat = factory.deleteOne(
  QuarterlyThirdPartyThreat
);
