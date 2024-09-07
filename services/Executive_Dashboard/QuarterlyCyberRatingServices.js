const QuarterlyCyberRating = require("../../models/Executive_Dashboard/QuarterlyCyberRating");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/executive-dashboard/cyber-resilience-time
// @access    private
exports.createQuarterlyCyberRating = factory.create(QuarterlyCyberRating);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/executive-dashboard/cyber-resilience-time/:id
// @access    Public
exports.getQuarterlyCyberRating = factory.getOne(QuarterlyCyberRating);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/executive-dashboard/cyber-resilience-time
// @access    Public
exports.getQuarterlyCyberRatings = factory.getAll(QuarterlyCyberRating);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/executive-dashboard/cyber-resilience-time/:id
// @access    private
exports.updateQuarterlyCyberRating = factory.updateOne(QuarterlyCyberRating);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/executive-dashboard/cyber-resilience-time/:id
// @access    private

exports.deleteQuarterlyCyberRating = factory.deleteOne(QuarterlyCyberRating);
