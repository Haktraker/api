const QuarterlySecurityEvent = require("../../models/Executive_Dashboard/QuarterlySecurityEvent");
const factory = require("../handlersFactory");

// @desc      Create QuarterlySecurityEvent
// @route     POST /api/security-event
// @access    private
exports.createQuarterlySecurityEvent = factory.create(QuarterlySecurityEvent);

// @desc      Get Specific QuarterlySecurityEvent by id
// @route     GET /api/security-event/:id
// @access    Public
exports.getQuarterlySecurityEvent = factory.getOne(QuarterlySecurityEvent);

// @desc      Get List Of QuarterlySecurityEvent
// @route     GET /api/security-event
// @access    Public
exports.getQuarterlySecurityEvents = factory.getAll(QuarterlySecurityEvent);

// @desc      Update QuarterlySecurityEvent
// @route     PATCH /api/security-event/:id
// @access    private
exports.updateQuarterlySecurityEvent = factory.updateOne(
  QuarterlySecurityEvent
);

// @desc      Delete QuarterlySecurityEvent
// @route     DELETE /api/security-event/:id
// @access    private

exports.deleteQuarterlySecurityEvent = factory.deleteOne(
  QuarterlySecurityEvent
);
