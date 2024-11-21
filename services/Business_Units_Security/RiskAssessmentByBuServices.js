const RiskAssessmentByBu = require("../../models/Business_Units_Security/RiskAssessmentByBu");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create RiskAssessmentByBu
// @route     POST /api/bu-security/risk-assessments-by-bu
// @access    private
exports.createRiskAssessmentByBu = factory.create(RiskAssessmentByBu);

// @desc      Get Specific RiskAssessmentByBu by id
// @route     GET /api/bu-security/risk-assessments-by-bu/:id
// @access    Public
exports.getRiskAssessmentByBu = factory.getOne(RiskAssessmentByBu);

// @desc      Get List Of RiskAssessmentByBu
// @route     GET /api/bu-security/risk-assessments-by-bu
// @access    Public
exports.getRiskAssessmentsByBu = factory.getAll(RiskAssessmentByBu);

// @desc      Update RiskAssessmentByBu
// @route     PATCH /api/bu-security/risk-assessments-by-bu/:id
// @access    private
exports.updateRiskAssessmentByBu = factory.updateOne(RiskAssessmentByBu);

// @desc      Delete RiskAssessmentByBu
// @route     DELETE /api/bu-security/risk-assessments-by-bu/:id
// @access    private

exports.deleteRiskAssessmentByBu = factory.deleteOne(RiskAssessmentByBu);
