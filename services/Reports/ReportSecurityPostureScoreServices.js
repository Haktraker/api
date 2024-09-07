const ReportSecurityPostureScore = require("../../models/Reports/ReportSecurityPostureScore");
const factory = require("../handlersFactory");

// @desc      Create Security Posture Score
// @route     POST /api/reports/security-posture-score
// @access    private
exports.createReportSecurityPostureScore = factory.create(
  ReportSecurityPostureScore
);

// @desc      Get Specific Security Posture Score by id
// @route     GET /api/reports/security-posture-score/:id
// @access    Public
exports.getReportSecurityPostureScore = factory.getOne(
  ReportSecurityPostureScore
);

// @desc      Get List Of Security Posture Score
// @route     GET /api/reports/security-posture-score
// @access    Public
exports.getReportSecurityPostureScores = factory.getAll(
  ReportSecurityPostureScore
);

// @desc      Update Security Posture Score
// @route     PATCH /api/reports/security-posture-score/:id
// @access    private
exports.updateReportSecurityPostureScore = factory.updateOne(
  ReportSecurityPostureScore
);

// @desc      Delete Security Posture Score
// @route     DELETE /api/reports/security-posture-score/:id
// @access    private

exports.deleteReportSecurityPostureScore = factory.deleteOne(
  ReportSecurityPostureScore
);
