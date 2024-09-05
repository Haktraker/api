const DigitalRiskIntelligence = require("../../models/Reports/DigitalRiskIntelligence");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/digital-risk-intelligence
// @access    private
exports.createDigitalRiskIntelligence = factory.create(DigitalRiskIntelligence);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/digital-risk-intelligence/:id
// @access    Public
exports.getDigitalRiskIntelligence = factory.getOne(DigitalRiskIntelligence);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/digital-risk-intelligence
// @access    Public
exports.getDigitalRiskIntelligences = factory.getAll(DigitalRiskIntelligence);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/digital-risk-intelligence/:id
// @access    private
exports.updateDigitalRiskIntelligence = factory.updateOne(
  DigitalRiskIntelligence
);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/digital-risk-intelligence/:id
// @access    private

exports.deleteDigitalRiskIntelligence = factory.deleteOne(
  DigitalRiskIntelligence
);
