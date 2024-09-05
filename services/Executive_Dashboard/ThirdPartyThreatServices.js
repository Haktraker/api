const ThirdPartyThreat = require("../../models/Reports/ThirdPartyThreat");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/third-party-threat
// @access    private
exports.createThirdPartyThreat = factory.create(ThirdPartyThreat);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/third-party-threat/:id
// @access    Public
exports.getThirdPartyThreat = factory.getOne(ThirdPartyThreat);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/third-party-threat
// @access    Public
exports.getThirdPartyThreats = factory.getAll(ThirdPartyThreat);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/third-party-threat/:id
// @access    private
exports.updateThirdPartyThreat = factory.updateOne(ThirdPartyThreat);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/third-party-threat/:id
// @access    private

exports.deleteThirdPartyThreat = factory.deleteOne(ThirdPartyThreat);
