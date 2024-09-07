const CyberAttackTrends = require("../../models/Executive_Dashboard/QuarterlyCyberAttackTrends");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/executive-dashboard/cyber-resilience-time
// @access    private
exports.createCyberAttackTrends = factory.create(CyberAttackTrends);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/executive-dashboard/cyber-resilience-time/:id
// @access    Public
exports.getCyberAttackTrend = factory.getOne(CyberAttackTrends);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/executive-dashboard/cyber-resilience-time
// @access    Public
exports.getCyberAttackTrends = factory.getAll(CyberAttackTrends);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/executive-dashboard/cyber-resilience-time/:id
// @access    private
exports.updateCyberAttackTrends = factory.updateOne(CyberAttackTrends);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/executive-dashboard/cyber-resilience-time/:id
// @access    private

exports.deleteCyberAttackTrends = factory.deleteOne(CyberAttackTrends);
