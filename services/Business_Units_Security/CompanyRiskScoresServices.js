const CompanyRiskScores = require("../../models/Business_Units_Security/CompanyRiskScores");
const factory = require("../handlersFactory");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create CompanyRiskScores
// @route     POST /api/bu-security/company-risk-scores
// @access    private
exports.createCompanyRiskScore = factory.create(CompanyRiskScores);

// @desc      Get Specific CompanyRiskScores by id
// @route     GET /api/bu-security/company-risk-scores/:id
// @access    Public
exports.getCompanyRiskScore = factory.getOne(CompanyRiskScores);

// @desc      Get List Of CompanyRiskScores
// @route     GET /api/bu-security/company-risk-scores
// @access    Public
exports.getCompanyRiskScores = factory.getAll(CompanyRiskScores);

// @desc      Update CompanyRiskScores
// @route     PATCH /api/bu-security/company-risk-scores/:id
// @access    private
exports.updateCompanyRiskScore = factory.updateOne(CompanyRiskScores);

// @desc      Delete CompanyRiskScores
// @route     DELETE /api/bu-security/company-risk-scores/:id
// @access    private

exports.deleteCompanyRiskScore = factory.deleteOne(CompanyRiskScores);
