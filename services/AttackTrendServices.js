const AttackTrend = require("../models/Reports/AttackTrend");
const factory = require("./handlersFactory");

// @desc      Create AttackTrend
// @route     POST /api/attack-trend
// @access    private
exports.createAttackTrend = factory.create(AttackTrend);

// @desc      Get Specific AttackTrend by id
// @route     GET /api/attack-trend/:id
// @access    Public
exports.getAttackTrend = factory.getOne(AttackTrend);

// @desc      Get List Of AttackTrend
// @route     GET /api/attack-trend
// @access    Public
exports.getAttackTrends = factory.getAll(AttackTrend);

// @desc      Update AttackTrend
// @route     PATCH /api/attack-trend/:id
// @access    private
exports.updateAttackTrend = factory.updateOne(AttackTrend);

// @desc      Delete AttackTrend
// @route     DELETE /api/attack-trend/:id
// @access    private

exports.deleteAttackTrend = factory.deleteOne(AttackTrend);
