const SecurityEvent = require("../models/Reports/SecurityEvent");
const factory = require("./handlersFactory");

// @desc      Create SecurityEvent
// @route     POST /api/security-event
// @access    private
exports.createSecurityEvent = factory.create(SecurityEvent);

// @desc      Get Specific SecurityEvent by id
// @route     GET /api/security-event/:id
// @access    Public
exports.getSecurityEvent = factory.getOne(SecurityEvent);

// @desc      Get List Of SecurityEvent
// @route     GET /api/security-event
// @access    Public
exports.getSecurityEvents = factory.getAll(SecurityEvent);

// @desc      Update SecurityEvent
// @route     PATCH /api/security-event/:id
// @access    private
exports.updateSecurityEvent = factory.updateOne(SecurityEvent);

// @desc      Delete SecurityEvent
// @route     DELETE /api/security-event/:id
// @access    private

exports.deleteSecurityEvent = factory.deleteOne(SecurityEvent);
