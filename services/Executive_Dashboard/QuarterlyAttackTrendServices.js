const QuarterlyAttackTrend = require("../../models/Executive_Dashboard/QuarterlyAttackTrend");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/executive-dashboard/cyber-resilience-time
// @access    private
exports.createQuarterlyAttackTrend = factory.create(QuarterlyAttackTrend);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/executive-dashboard/cyber-resilience-time/:id
// @access    Public
exports.getQuarterlyAttackTrend = factory.getOne(QuarterlyAttackTrend);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/executive-dashboard/cyber-resilience-time
// @access    Public
exports.getQuarterlyAttackTrends = factory.getAll(QuarterlyAttackTrend);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/executive-dashboard/cyber-resilience-time/:id
// @access    private
exports.updateQuarterlyAttackTrend = factory.updateOne(QuarterlyAttackTrend);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/executive-dashboard/cyber-resilience-time/:id
// @access    private

exports.deleteQuarterlyAttackTrend = factory.deleteOne(QuarterlyAttackTrend);
