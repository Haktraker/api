const CyberResilienceTime = require("../../models/Reports/CyberResilienceTime");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/executive-dashboard/cyber-resilience-time
// @access    private
exports.createCyberResilienceTime = factory.create(CyberResilienceTime);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/executive-dashboard/cyber-resilience-time/:id
// @access    Public
exports.getCyberResilienceTime = factory.getOne(CyberResilienceTime);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/executive-dashboard/cyber-resilience-time
// @access    Public
exports.getCyberResilienceTimes = factory.getAll(CyberResilienceTime);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/executive-dashboard/cyber-resilience-time/:id
// @access    private
exports.updateCyberResilienceTime = factory.updateOne(CyberResilienceTime);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/executive-dashboard/cyber-resilience-time/:id
// @access    private

exports.deleteCyberResilienceTime = factory.deleteOne(CyberResilienceTime);
