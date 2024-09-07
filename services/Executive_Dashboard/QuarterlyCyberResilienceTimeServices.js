const QuarterlyCyberResilienceTimeServices = require("../../models/Executive_Dashboard/QuarterlyCyberResilienceTime");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/executive-dashboard/cyber-resilience-time
// @access    private
exports.createQuarterlyCyberResilienceTime = factory.create(
  QuarterlyCyberResilienceTimeServices
);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/executive-dashboard/cyber-resilience-time/:id
// @access    Public
exports.getQuarterlyCyberResilienceTime = factory.getOne(
  QuarterlyCyberResilienceTimeServices
);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/executive-dashboard/cyber-resilience-time
// @access    Public
exports.getQuarterlyCyberResilienceTimes = factory.getAll(
  QuarterlyCyberResilienceTimeServices
);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/executive-dashboard/cyber-resilience-time/:id
// @access    private
exports.updateQuarterlyCyberResilienceTime = factory.updateOne(
  QuarterlyCyberResilienceTimeServices
);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/executive-dashboard/cyber-resilience-time/:id
// @access    private

exports.deleteQuarterlyCyberResilienceTime = factory.deleteOne(
  QuarterlyCyberResilienceTimeServices
);
