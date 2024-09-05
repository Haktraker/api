const SecurityPostureScore = require("../../models/Reports/SecurityPostureScore");
const factory = require("../handlersFactory");

// @desc      Create Security Posture Score
// @route     POST /api/executive-dashboard/security-posture-score
// @access    private
exports.createSecurityPostureScore = factory.create(SecurityPostureScore);

// @desc      Get Specific Security Posture Score by id
// @route     GET /api/executive-dashboard/security-posture-score/:id
// @access    Public
exports.getSecurityPostureScore = factory.getOne(SecurityPostureScore);

// @desc      Get List Of Security Posture Score
// @route     GET /api/executive-dashboard/security-posture-score
// @access    Public
exports.getSecurityPostureScores = factory.getAll(SecurityPostureScore);

// @desc      Update Security Posture Score
// @route     PATCH /api/executive-dashboard/security-posture-score/:id
// @access    private
exports.updateSecurityPostureScore = factory.updateOne(SecurityPostureScore);

// @desc      Delete Security Posture Score
// @route     DELETE /api/executive-dashboard/security-posture-score/:id
// @access    private

exports.deleteSecurityPostureScore = factory.deleteOne(SecurityPostureScore);
