const QuarterlySecurityPostureScore = require("../../models/Executive_Dashboard/QuarterlySecurityPostureScore");
const factory = require("../handlersFactory");

// @desc      Create Quarterly Security Posture Score
// @route     POST /api/executive-dashboard/security-posture-score
// @access    private
exports.createQuarterlySecurityPostureScore = factory.create(
  QuarterlySecurityPostureScore
);

// @desc      Get Specific Quarterly Security Posture Score by id
// @route     GET /api/executive-dashboard/security-posture-score/:id
// @access    Public
exports.getQuarterlySecurityPostureScore = factory.getOne(
  QuarterlySecurityPostureScore
);

// @desc      Get List Of Quarterly Security Posture Score
// @route     GET /api/executive-dashboard/security-posture-score
// @access    Public
exports.getQuarterlySecurityPostureScores = factory.getAll(
  QuarterlySecurityPostureScore
);

// @desc      Update Quarterly Security Posture Score
// @route     PATCH /api/executive-dashboard/security-posture-score/:id
// @access    private
exports.updateQuarterlySecurityPostureScore = factory.updateOne(
  QuarterlySecurityPostureScore
);

// @desc      Delete Quarterly Security Posture Score
// @route     DELETE /api/executive-dashboard/security-posture-score/:id
// @access    private

exports.deleteQuarterlySecurityPostureScore = factory.deleteOne(
  QuarterlySecurityPostureScore
);
