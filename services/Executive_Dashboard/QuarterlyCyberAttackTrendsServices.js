const QuarterlyCyberAttackTrendsServices = require("../../models/Executive_Dashboard/QuarterlyCyberAttackTrends");
const factory = require("../handlersFactory");

// @desc      Create QuarterlyCyberAttackTrendsServices
// @route     POST /api/cyber-attack-trends
// @access    private
exports.createQuarterlyCyberAttackTrends = factory.create(
  QuarterlyCyberAttackTrendsServices
);

// @desc      Get Specific QuarterlyCyberAttackTrendsServices by id
// @route     GET /api/cyber-attack-trends/:id
// @access    Public
exports.getQuarterlyCyberAttackTrend = factory.getOne(
  QuarterlyCyberAttackTrendsServices
);

// @desc      Get List Of QuarterlyCyberAttackTrendsServices
// @route     GET /api/cyber-attack-trends
// @access    Public
exports.getQuarterlyCyberAttackTrends = factory.getAll(
  QuarterlyCyberAttackTrendsServices
);

// @desc      Update QuarterlyCyberAttackTrendsServices
// @route     PATCH /api/cyber-attack-trends/:id
// @access    private
exports.updateQuarterlyCyberAttackTrends = factory.updateOne(
  QuarterlyCyberAttackTrendsServices
);

// @desc      Delete QuarterlyCyberAttackTrendsServices
// @route     DELETE /api/cyber-attack-trends/:id
// @access    private

exports.deleteQuarterlyCyberAttackTrends = factory.deleteOne(
  QuarterlyCyberAttackTrendsServices
);
