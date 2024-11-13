const RiskScoreDistribution = require("../../models/User_Behavior/RiskScoreDistribution");
const factory = require("../handlersFactory");
// const { uploadSingleFile } = require("../middlewares/uploadImagesMiddleWare");

// exports.uploadScreenshot = uploadSingleFile("screenshot");
// @desc      Create RiskScoreDistribution
// @route     POST /api/uba/risk-score-distribution
// @access    private
exports.createRiskScoreDistribution = factory.create(RiskScoreDistribution);

// @desc      Get Specific RiskScoreDistribution by id
// @route     GET /api/uba/risk-score-distribution/:id
// @access    Public
exports.getRiskScoreDistribution = factory.getOne(RiskScoreDistribution);

// @desc      Get List Of RiskScoreDistribution
// @route     GET /api/uba/risk-score-distribution
// @access    Public
exports.getRiskScoreDistributions = factory.getAll(RiskScoreDistribution);

// @desc      Update RiskScoreDistribution
// @route     PATCH /api/uba/risk-score-distribution/:id
// @access    private
exports.updateRiskScoreDistribution = factory.updateOne(RiskScoreDistribution);

// @desc      Delete RiskScoreDistribution
// @route     DELETE /api/uba/risk-score-distribution/:id
// @access    private

exports.deleteRiskScoreDistribution = factory.deleteOne(RiskScoreDistribution);
