const QuarterlyDigitalRiskIntelligence = require("../../models/Executive_Dashboard/QuarterlyDigitalRiskIntelligence");
const factory = require("../handlersFactory");

// @desc      Create Quarterly Digital Risk Intelligence
// @route     POST /api/executive-dashboard/digital-risk-intelligence
// @access    private
exports.createQuarterlyDigitalRiskIntelligence = factory.create(
  QuarterlyDigitalRiskIntelligence
);

// @desc      Get Specific Quarterly Digital Risk Intelligence by id
// @route     GET /api/executive-dashboard/digital-risk-intelligence/:id
// @access    Public
exports.getQuarterlyDigitalRiskIntelligence = factory.getOne(
  QuarterlyDigitalRiskIntelligence
);

// @desc      Get List Of Quarterly Digital Risk Intelligence
// @route     GET /api/executive-dashboard/digital-risk-intelligence
// @access    Public
exports.getQuarterlyDigitalRiskIntelligences = factory.getAll(
  QuarterlyDigitalRiskIntelligence
);

// @desc      Update Quarterly Digital Risk Intelligence
// @route     PATCH /api/executive-dashboard/digital-risk-intelligence/:id
// @access    private
exports.updateQuarterlyDigitalRiskIntelligence = factory.updateOne(
  QuarterlyDigitalRiskIntelligence
);

// @desc      Delete Quarterly Digital Risk Intelligence
// @route     DELETE /api/executive-dashboard/digital-risk-intelligence/:id
// @access    private

exports.deleteQuarterlyDigitalRiskIntelligence = factory.deleteOne(
  QuarterlyDigitalRiskIntelligence
);
